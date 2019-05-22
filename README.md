# MeanAppChallenge

<h3>Installation and running.</h3>
For running application on Windows, you need to install:
<ul>
  <li><b>Mongodb</b> (3.4, i had problems with 3.4 and needed to install 4.0 version). After installation, position yourself to Program Files installation folder,bin directory, (eg. C:\Program Files\MongoDB\Server\4.0\bin) and there run Command prompt with command <code> mongod </code>, which will open connection to mongodb server. </li> 
  <li><b>Robomongo</b>(Robo3T). This is a gui for Mongo database, where you can check the state of your database. After installation, run the program and connect to the port of mongodb server.(eg. localhost:27017)</li> 
  <li><b>Nodejs,Express,Angular CLI.</b> After standard installation of NodeJS, within the root folder of project, in command prompt install all the dependencies with the <code> npm install </code> command, and if that fails run commands <code> npm install @angular/cli@1 </code> to install Angular CLI 5, and <code> npm install express </code> to install Express. (https://coderwall.com/p/mbov6w/running-nodejs-and-express-on-windows)</li>
  <li><b>Allow-Control-Allow-Origin chrome extension.</b> This is the extension to enable cross-origin resource sharing.(i haven't tried to use websockets so i instead used multiple http requests) </li> 
  <li><b>Visual Studio Code.</b> To run application, navigate to backend-app folder in visual studio terminal and type <code> node index.js </code> to start backend server, and then navigate to frontend-app folder with <code> ng serve </code> command to start frontend server, and position in browser to <code> http://localhost:4200/homeBlog </code></li> 
</ul>
