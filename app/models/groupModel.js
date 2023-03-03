const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    members: [],
    user_id: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Group', groupSchema)