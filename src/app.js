const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Inventory CRUD operations - Shopify Backend 2022',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from Inventory collection within MongoDB',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Arsh Kochhar',
      url: 'arshkochhar15@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/api/swagger_yaml.js'],
};
const swaggerSpec = swaggerJSDoc(options);
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
