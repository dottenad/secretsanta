const Group = require('../models/groupModel')
const mongoose = require('mongoose')

const getGroup = (req, res) => {
    res.status(200).json({ mssg: 'hello world' })
}

const getGroups = async (req, res) => {
    const user_id = req.user._id
    const groups = await Group.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(groups)
}

//create new group
const createGroup = async (req, res) => {
    const { title, members } = req.body

    //add doc to db
    try {
        const user_id = req.user._id
        const group = await Group.create({ title, members, user_id })
        res.status(200).json(group)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateGroup = (req, res) => {
    res.status(200).json({ mssg: 'hello world' })
}

const deleteGroup = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such group' })
    }

    const group = await Group.findOneAndDelete({ _id: id })

    if (!group) {
        return res.status(400).json({ error: 'No such group' })
    }

    res.status(200).json(group)
}

module.exports = {
    getGroup,
    getGroups,
    createGroup,
    updateGroup,
    deleteGroup
}