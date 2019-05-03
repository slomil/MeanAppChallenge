# MeanAppChallenge

Installation requirements: Mongodb, Robomongo(optional), Nodejs, Express, Angular CLI, Visual Studio Code, Allow-Control-Allow-Origin chrome extension. 

To run application, run mongodb with command `mongod` in terminal (on location where is bin folder), backend server with `node index.js` and frontend server with `ng serve` command, and position in browser to `"http://localhost:4200"` address.<br>

After that, run mongodb shell to insert users to database with 
`use myApp;
db.createCollection('users');
db.getCollection('users').insertOne({'username':'user'},{'password':'pass'}); //user and pass can be arbitrary`
