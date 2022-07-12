const express = require ('express');

const addItem = require('../controllers/itemController').add_Item

const router = express.Router();

router.post('/', addItem)

module.exports = router;