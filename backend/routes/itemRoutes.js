const express = require ('express');

const addItem = require('../controllers/itemController').add_Item
const getItems = require('../controllers/itemController').get_Item
const getItem = require('../controllers/itemController').get_Item_by_id

const router = express.Router();

router.post('/', addItem)
router.get('/', getItems)
router.get('/:id', getItem);

module.exports = router;