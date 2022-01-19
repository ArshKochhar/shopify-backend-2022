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
      url: 'https://shopify-crud-backend-2022.herokuapp.com',
      name: 'Production Server',
    },
    // UNCOMMENT BELOW WHEN RUNNING LOCALLY, and comment above simultaneously.
    // {
    //   url: 'http://localhost:5000',
    //   name: 'LocalHost server',
    // },
  ],
};

module.exports = swaggerDefinition;
