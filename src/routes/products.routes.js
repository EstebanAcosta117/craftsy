const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/:product_id', productsController.detail);

module.exports = router 