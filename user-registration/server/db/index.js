const mongoose = require('mongoose');
const dbURL = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority"

const connectToDB = mongoose.connect(dbURL, ((error) => {
    if (error) {
        console.log("error", error);
    }
    else {
        console.log("CONNECTED TO DATABASE");
    }
}))

module.exports = connectToDB;