const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// MongoDB connection setup
const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db(config.database);

// Connect to MongoDB
(async function () {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetScores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  try {
    const scores = await db.collection('scores').find().sort({ score: -1 }).limit(10).toArray();
    res.send(scores);
  } catch (err) {
    res.status(500).send({ msg: 'Failed to get scores' });
  }
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  try {
    await db.collection('scores').insertOne(req.body);
    const scores = await db.collection('scores').find().sort({ score: -1 }).limit(10).toArray();
    res.send(scores);
  } catch (err) {
    res.status(500).send({ msg: 'Failed to submit score' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  
  await db.collection('users').insertOne(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;
  const query = { [field]: value };
  return await db.collection('users').findOne(query);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Cleanup MongoDB connection when server shuts down
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});