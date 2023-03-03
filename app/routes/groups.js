const express = require('express')
const {
    getGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
} = require('../controllers/groupController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

router.get('/', getGroups)

router.get('/:id', getGroup)

router.post('/', createGroup)

router.patch('/:id', updateGroup)

router.delete('/:id', deleteGroup)

module.exports = router