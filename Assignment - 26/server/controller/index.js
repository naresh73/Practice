const todosModel = require('../model');

async function createItem (req, res) {
    const { item } = req.body;

    const existItem = await todosModel.findOne({ item: item })

    if (existItem) {
        res.send({
            message: "Item already in todo"
        })
    } else {
        try {
            const newItem = new todosModel({
                item
            })

            await newItem.save()

            res.send({
                message: "Item Added",
                item: newItem
            })
        } catch (error) {
            res.send({
                error : error
            })
        }
    }
}

async function getItems (req, res) {
    const item = await todosModel.find({})
    try {
        res.send({
            item : item
        })
    } catch (error) {   
        res.send({
            error : error
        })
    } 
}

module.exports = {createItem, getItems};