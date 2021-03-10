const mongoose = require('mongoose')


const dbSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('tableName', dbSchema)