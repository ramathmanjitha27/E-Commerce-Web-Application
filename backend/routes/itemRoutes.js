const express = require ('express');

const addItem = require('../controllers/itemController').add_Item
const getItems = require('../controllers/itemController').get_Item

const router = express.Router();

router.post('/', addItem)
router.get('/', getItems)

module.exports = router;