# MeanAppChallenge

Installation requirements: Mongodb, Robomongo(optional), Nodejs, Express, Angular CLI, Visual Studio Code, Allow-Control-Allow-Origin chrome extension. 

To run application, run mongodb with command `mongod` in terminal (on location where is bin folder), backend server with `node index.js` and frontend server with `ng serve` command, and position in browser to `"http://localhost:4200"` address.<br>

After that, run mongodb shell in order to insert users to database with <br>
`use myApp; \n
db.createCollection('users'); \n
db.getCollection('users').insertOne({'username':'user'},{'password':'pass'}); //user and pass can be arbitrary`
