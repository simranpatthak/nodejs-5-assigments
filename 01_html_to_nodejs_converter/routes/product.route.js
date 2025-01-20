const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/', productController.getAllProducts);
router.get('/seed', productController.seedProducts);

module.exports = router;