# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Startup Notes

From this i learned what the different technologies do in the purpose of making my project: 

Notes from the instructor:
- **HTML** - Basic structural and organizational elements
- **CSS** - Styling and animating
- **React** - React to what a user does, represent functionality with components, and route what is displayed using the React web framework. React helps you to modularize your code into components that represent things like a login form, a picture card, or a interactive part of a game. The routing that React provides changes what is displayed to the user based upon the actions they take. For example, after logging in, React whould change the display from the login conponents, to the game play components.
- **Web service** - Remote functions that your application calls on your, and someone else's, web server _(e.g. saveScores, getWeather, chatWithFriend)_. You must include **at least one call to a service that you didn't write**. You can view a list of APIs here: [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis).

- **Authentication**: An input for your user to create an account and login. You will want to display the user's name after they login.
- **Database data**: A rendering of application data that is stored in the database. For Simon, this is the high scores of all players.
- **WebSocket data**: A rendering of data that is received from your server. This may be realtime data sent from other users (e.g. chat or scoring data), or realtime data that your service is generating (e.g. stock prices or latest high scores). For Simon, this represents every time another user creates or ends a game.


## AWS Notes

Set up your AWS account using your byu.edu email address.
Create a new EC2 instance and access the server using http://6.5.4.3 (where 6.5.4.3 is your IP address).
Lease a domain in Route53. Make sure you respond to the email that they will send you.
Make sure that you can access your server through HTTP through http://startup.yourdomain (where yourdomain is replaced with the domain you leased from Route53)
Edit your Caddyfile so that you can access your server through HTTPS.
You should see the default web page displayed through HTTPS
Upload the URL to your startup application to the Canvas assignment. The URL should have the form https://startup.yourdomain
got to the front of the terminal and then hit delete to update within alogn with use esc and the :wq to exit and make sure you do it nad tyr and it may take a few trys to get it to actually work

## HTML Notes
go to gitbash:
Simon: 
to go to simon:
cd /c/Development/CS260\ Web\ Programming/simon-html
delopy:
./deployFiles.sh -k C:/Users/chloe/Downloads/webserver260.pem -h wackamole.click -s simon
startup: 
to to startup:
cd /c/Development/CS260\ Web\ Programming/startup
delopy:
./deployFiles.sh -k C:/Users/chloe/Downloads/webserver260.pem -h wackamole.click -s startup

## React Notes
go to gitbash:
Simon: 
to go to simon:
cd /c/Development/CS260\ Web\ Programming/simon-react-p1
delopy:
./deployReact.sh -k C:/Users/chloe/Downloads/webserver260.pem -h wackamole.click -s simon
startup: 
to to startup:
cd /c/Development/CS260\ Web\ Programming/startup
delopy:
./deployReact.sh -k C:/Users/chloe/Downloads/webserver260.pem -h wackamole.click -s startup






## CSS: Cascading Style Sheets
![image](https://github.com/user-attachments/assets/d4b85029-ee37-4629-9a60-95d6a5ff79d1)
Selectors: 
![image](https://github.com/user-attachments/assets/25d99d9b-001d-4524-a29e-a924906b3445)
![example](https://github.com/user-attachments/assets/345e0a1e-cca3-4117-8ded-5a9abf48ade9)
Declarations: 
![image](https://github.com/user-attachments/assets/b9cde03e-4057-45b1-a260-bc734d0c130b)


