const Gift = require('../models/giftModel')
const mongoose = require('mongoose')

const getGift = (req, res) => {
    res.status(200).json({ mssg: 'hello world' })
}

const getGifts = async (req, res) => {
    const user_id = req.user._id
    const gifts = await Gift.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(gifts)
}

//create new gift
const createGift = async (req, res) => {
    const { title, price, url } = req.body

    //add doc to db
    try {
        const user_id = req.user._id
        const gift = await Gift.create({ title, price, url, user_id })
        res.status(200).json(gift)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateGift = (req, res) => {
    res.status(200).json({ mssg: 'hello world' })
}

const deleteGift = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such gift' })
    }

    const gift = await Gift.findOneAndDelete({ _id: id })

    if (!gift) {
        return res.status(400).json({ error: 'No such gift' })
    }

    res.status(200).json(gift)
}

module.exports = {
    getGift,
    getGifts,
    createGift,
    updateGift,
    deleteGift
}