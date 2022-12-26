const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
    item : String
})

const todosModel = mongoose.model("todosModel", todosSchema)

module.exports = todosModel;