const mongoose = require('mongoose')
const Schema = mongoose.Schema

const searchSecheme = new Schema({
    keyword:{
        type: String,
        require: true

    },
    resultjson:{
        type: JSON,
        require: true

    }

}, {timestamps: true})

const search = mongoose.model('search',searchSecheme)
module.exports = search