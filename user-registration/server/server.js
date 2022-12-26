const express = require('express')
const App = express()
const PORT = 8000;
const cors = require('cors');
const connectToDB = require('./db');
const account = require('./controller')


connectToDB
App.use(express.json())
App.use(cors())

App.post("/register",account.createAccount);
App.post("/login",account.loginToYourAccount);
App.listen(PORT, console.log("server is listening on PORT",PORT))