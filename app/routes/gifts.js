const express = require('express')
const {
    getGifts,
    getGift,
    createGift,
    updateGift,
    deleteGift
} = require('../controllers/giftController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

router.get('/', getGifts)

router.get('/:id', getGift)

router.post('/', createGift)

router.patch('/:id', updateGift)

router.delete('/:id', deleteGift)

module.exports = router