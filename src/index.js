const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('Shopify Inventory -  CRUD API Listening');
  /* eslint-enable no-console */
});
