const express = require('express')
const router = express.Router()
const upload = require("../utils/multer");

const colorProductController = require('../controllers/color_product');

// Add new product
router.post('/add',upload.array('images'),colorProductController.addColorProduct);

router.get('/get',colorProductController.getAllColorProduct);

router.put('/update',upload.array('images'),colorProductController.updateColorProduct);

// Get last one
router.get('/getLastOne',colorProductController.getLastColorProduct);

module.exports = router;