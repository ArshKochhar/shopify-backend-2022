const express = require('express');

const emojis = require('./emojis');
const products = require('./products');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/inventory', products);

module.exports = router;
