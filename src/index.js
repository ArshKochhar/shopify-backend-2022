const swaggerUi = require('swagger-ui-express');
const app = require('./app');
const swaggerDocument = require('../swagger.json');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Shopify Inventory -  CRUD API Listening on: http://localhost:${port}`);
  /* eslint-enable no-console */
});
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
