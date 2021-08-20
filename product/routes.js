const express = require('express');
const ProductController = require('./product.controller');

const router = express.Router();

router.post('/create_product', ProductController.createProduct);
router.get('/read_product/:id', ProductController.readProduct);
router.put('/update_product', ProductController.updateProduct);
router.put('/delete_product', ProductController.deleteProduct);

module.exports = router;