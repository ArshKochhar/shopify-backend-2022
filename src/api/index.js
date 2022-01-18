const express = require('express');

const products = require('./products');

const router = express.Router();

router.use('/inventory', products);

module.exports = router;
