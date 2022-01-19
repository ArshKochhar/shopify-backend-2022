const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./api/swagger_def');

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
    message: 'Please paste this URL to access the API docs built using Swagger UI - https://shopify-crud-backend-2022.herokuapp.com/swagger/ '
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
