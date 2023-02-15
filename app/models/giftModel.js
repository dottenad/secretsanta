const mongoose = require('mongoose')

const Schema = mongoose.Schema

const giftSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Gift', giftSchema)