/* eslint-disable consistent-return */
const express = require('express');
const monk = require('monk');

const schema = require('./model');

const db = monk(process.env.MONGO_URI);
const inventory = db.get('inventory');

const router = express.Router();

// Retreive all products
router.get('/', async (req, res, next) => {
  try {
    const prods = await inventory.find({});
    res.json(prods);
  } catch (error) {
    next(error);
  }
});

// Create a new product
router.post('/', async (req, res, next) => {
  try {
    const item = await inventory.findOne({
      name: req.body.name
    });
    if (item) {
      return next(new Error('This item already exists'));
    }
    const value = await schema.validateAsync(req.body);
    const insertDB = await inventory.insert(value);
    res.json(insertDB);
  } catch (error) {
    next(error);
  }
});

// Retreive 1 unique product, using `id`
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await inventory.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

// Update 1 product with new fields
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await inventory.findOne({
      _id: id,
    });
    if (!item) return next();
    await inventory.update({
      _id: id,
    }, {
      $set: value,
    });
    return res.json(value);
  } catch (error) {
    next(error);
  }
});

// Delete 1 product
// shouldnt delete a product whos id isnt found
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const exists = await inventory.findOne({
      _id: id,
    });
    if (exists) {
      await inventory.remove({ _id: id });
      res.json({
        message: 'Success',
      });
    } else {
      return next(new Error('This item does not exist'));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
