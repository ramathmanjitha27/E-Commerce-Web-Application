const express = require ('express');

const addItem = require('../controllers/itemController').add_Item
const getItems = require('../controllers/itemController').get_Item
const getItem = require('../controllers/itemController').get_Item_by_id
const updateItem = require('../controllers/itemController').update_Item
const deleteItem = require('../controllers/itemController').delete_Item

const router = express.Router();

router.post('/', addItem)
router.get('/', getItems)
router.get('/:id', getItem);
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router;