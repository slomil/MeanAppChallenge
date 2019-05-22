# MeanAppChallenge

<h3>Installation and running.</h3>
For running application on Windows, you need to install:
<ul>
  <li><b>Mongodb</b> (3.4, i had problems with 3.4 and needed to install 4.0 version). After installation, position yourself to Program Files installation folder,bin directory, (eg. C:\Program Files\MongoDB\Server\4.0\bin) and there run Command prompt with command `mongod`, which will open connection to mongodb server. </li> 
  <li><b>Robomongo</b>(Robo3T). This is a gui for Mongo database, where you can check the state of your database. After installation, run the program and connect to the port of mongodb server.(eg. localhost:27017)</li> 
  <li><b>Nodejs,Express,Angular CLI.</b> After standard installation of NodeJS, within the root folder of project, in command prompt install all the dependencies with the `npm install` command, and if that fails run commands`npm install @angular/cli@1` to install Angular CLI 5, and `npm install express` to install Express. (https://coderwall.com/p/mbov6w/running-nodejs-and-express-on-windows)</li>
  <li><b>Allow-Control-Allow-Origin chrome extension.</b> This is the extension to enable cross-origin resource sharing.(i haven't tried to use websockets so i instead used multiple http requests) </li> 
  <li><b>Visual Studio Code.</b> To run application, navigate to backend-app folder in visual studio terminal and type `node index.js` to start backend server, and then navigate to frontend-app folder with `ng serve` command to start frontend server, and position in browser to `http://localhost:4200/homeBlog`</li> 
</ul>
