const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().trim().required(),
  category: Joi.string().trim().required(),
  price: Joi.string().trim().required(),
  quantity: Joi.string().trim().required(),
  url: Joi.string().uri()
});

module.exports = schema;
