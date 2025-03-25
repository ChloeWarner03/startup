const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

// Construct MongoDB connection URL with proper encoding
const url = `mongodb+srv://${encodeURIComponent(config.userName)}:${encodeURIComponent(config.password)}@${config.hostname}/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const db = client.db('startup');  // Changed to use 'startup' database
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await client.connect();  // Explicitly connect first
    await db.command({ ping: 1 });
    console.log(`Connected to MongoDB cluster at ${config.hostname}`);
  } catch (ex) {
    console.error(`Unable to connect to database: ${ex.message}`);
    console.error(`Connection URL (password hidden): ${url.replace(encodeURIComponent(config.password), '******')}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addScore(score) {
  return scoreCollection.insertOne({
    ...score,
    timestamp: new Date()  // Add timestamp for proper sorting
  });
}

function getHighScores() {
  const query = { score: { $gt: 0 } };  // Remove arbitrary upper limit
  const options = {
    sort: { score: -1, timestamp: -1 },  // Sort by score and then by timestamp
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  getHighScores,
};
