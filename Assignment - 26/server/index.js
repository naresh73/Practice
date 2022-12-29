const express = require('express')
const App = express()
const PORT = 8000;
const cors = require('cors');
const connectToDB = require('./db');
const todo = require('./controller')


connectToDB
App.use(express.json())
App.use(cors())

App.post("/add",todo.createItem);
App.get("/get",todo.getItems);
App.delete("/remove/:id",todo.removeItem);
App.delete("/clear",todo.clearList);
App.listen(PORT, console.log("server is listening on PORT",PORT))