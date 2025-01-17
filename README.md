# Wack-a-Mole

[My Notes](notes.md)

The application that I want to create is a Wack-a-Mole. It was one of the games that I loved to play as a little girl when we went to the arcade. I am going to have it so then they have a sign-in page so then they can make an account and with that, they will be able to start the game. It will start pretty easy and slow and you will be able to get points for the moles that you are successfully able to kit in that timeframe. As the game continues the moles are going to get faster and faster and at the end of the game, you will be able to see your score. You will also be able to go to a different page and see the high scores of the other players that have played the game. 

> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

When you were younger did you ever go to the arcade and have the best time of your life playing the games there? It was like entering into a new world with limitless fun at the tip of your finger! This Wack-a-mole application allows you to bring home one of these classic arcade games to play on your computer right in your living room! Each player will be able to play this intense version of this classic childhood game and be able to see the high scores of other users to make this game a little more competitive! Don't miss out and go Wack-a-Mole!

### Design

![Design image:Wack-a-Mole](wack-a-mole-third.gif)

Backend design for the Game: 
```mermaid
sequenceDiagram
    actor Player
    Player->>Login: Enter in login information
    Login ->>Play: Start the Game
    Play ->>HighScore: Getting to all highscores
    Play ->>Play: Wack the moles
    Play ->>HighScore: receiving the high scores
    HighScore ->>HighScore: Live Logout/New HighScore Info
    Play -->>Login: Logout
    HighScore -->>Login: Logout
```


### Key features
- Ability to create a login
- Play a fun game of Wack-a-Mole
- Ability to see the Highscores of other players
- Ability to see your score
- Ability to see when people end their games
- Ability to see when someone gets a new highscore

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for the game and one for the highscores
- **CSS** - animating the game and style of the login and the highscores
- **REACT** - Provides login, interactive part of the game and the highscores
- **Web Service** - Uses Savescores to save the highscores of the player and apilayer mailboxlayer ([https://eva.pingutil.com/](https://mailboxlayer.com/)) to validate email addresses of the players when they are making a login
- **Authentication** - Allows player to create an account and login.
- **Database data**: A rendering of application data that is stored in the database. For Wack-a-Mole, this is the high scores of all players.
- **WebSocket data** -  A rendering of data that is received from your server. For Wack-a-Mole, the newest high score will be sent to players

### Example of representing all technologies


## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
