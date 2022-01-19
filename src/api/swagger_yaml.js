// GET - retrieval of all items
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/:
 *   get:
 *     summary: Retrieve a list Products in the inventory.
 *     description: GET request to get all products from the inventory.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: _id of the product
 *                   example: 61db3a028680f23058c00563
 *                 name:
 *                   type: string
 *                   description: Name of the Product.
 *                   example: T-shirt
 *                 category:
 *                   type: string
 *                   description: Name of the Product.
 *                   example: clothes
 *                 price:
 *                   type: string
 *                   decription: Price of the Product.
 *                   example: 33.99
 *                 quantity:
 *                   type: string
 *                   description: Quantity of the Product
 *                   example: 5
 *                 url:
 *                   type: string
 *                   description: URL of the Product
 *                   example: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 */

// GET - retrieval of all items and export into a CSV
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/export:
 *   get:
 *     summary: Retrieve a list Products in the inventory and exports to a CSV.
 *     description: GET request to get all products from the inventory and exports to a CSV.
 *     responses:
 *       200:
 *         description: A list of products in CSV.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: _id of the product
 *                   example: 61db3a028680f23058c00563
 *                 name:
 *                   type: string
 *                   description: Name of the Product.
 *                   example: T-shirt
 *                 category:
 *                   type: string
 *                   description: Name of the Product.
 *                   example: clothes
 *                 price:
 *                   type: string
 *                   decription: Price of the Product.
 *                   example: 33.99
 *                 quantity:
 *                   type: string
 *                   description: Quantity of the Product
 *                   example: 5
 *                 url:
 *                   type: string
 *                   description: URL of the Product
 *                   example: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 */

// GET - retrieval of single item based on _id
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/export/{_id}:
 *   get:
 *     summary: Retrieve a Single Product and export in a CSV.
 *     description: GET request to retrieve a Single Product and export in a CSV.
 *     parameters:
 *       - in: path
 *         name: _id
 *         example: 61db39f58680f23058c00562
 *         required: true
 *         description: Numeric ID of the product to retreive
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: _id of the product
 *                         example: 61db3a028680f23058c00563
 *                       name:
 *                         type: string
 *                         description: Name of the Product.
 *                         example: T-shirt
 *                       category:
 *                         type: string
 *                         description: Name of the Product.
 *                         example: clothes
 *                       price:
 *                         type: string
 *                         decription: Price of the Product.
 *                         example: 33.99
 *                       quantity:
 *                         type: string
 *                         description: Quantity of the Product
 *                         example: 5
 *                       url:
 *                         type: string
 *                         description: URL of the Product
 *                         example: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 */

// GET - retrieval of single item based on _id
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/{_id}:
 *   get:
 *     summary: Retrieve a single Product in the inventory.
 *     description: GET request to get all products from the inventory.
 *     parameters:
 *       - in: path
 *         name: _id
 *         example: 61db3a028680f23058c00563
 *         required: true
 *         description: Numeric ID of the product to retreive
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: _id of the product
 *                         example: 61db3a028680f23058c00563
 *                       name:
 *                         type: string
 *                         description: Name of the Product.
 *                         example: T-shirt
 *                       category:
 *                         type: string
 *                         description: Name of the Product.
 *                         example: clothes
 *                       price:
 *                         type: string
 *                         decription: Price of the Product.
 *                         example: 33.99
 *                       quantity:
 *                         type: string
 *                         description: Quantity of the Product
 *                         example: 5
 *                       url:
 *                         type: string
 *                         description: URL of the Product
 *                         example: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 */

// POST - Creating a new product in the inventory
/**
 * @swagger
 * paths:
 *   /api/v1/inventory/:
 *     post:
 *       summary: Creates a new Product in the inventory.
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 category:
 *                   type: string
 *                 price:
 *                   type: string
 *                 quantity:
 *                   type: string
 *                 url:
 *                   type: string
 *               example:   # Sample object
 *                 name: T-Shirt
 *                 category: clothes
 *                 price: "33.44"
 *                 quantity: "3"
 *                 url: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 *       responses:
 *         200:
 *           description: Creates a product in the database.
 */

// PUT - Update a product in the inventory based on a given _id
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/{_id}:
 *   put:
 *     summary: Update a single product in the inventory.
 *     description: PUT request to update properties of a product.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         example: 61e0e28abbb115070a7408b6
 *         description: Numeric ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: string
 *               quantity:
 *                 type: string
 *               url:
 *                 type: string
 *             example:   # Sample object
 *               name: T-Shirt
 *               category: clothes
 *               price: "33.44"
 *               quantity: "3"
 *               url: https://bigbudpress.com/collections/prints/products/pantry-button-up-spring-rapture
 *     responses:
 *       200:
 *         description: Updates a product in the database.
 */

// DELETE - Delete a product from the inventory based on a given _id
/**
 * @swagger
 * paths:
 *  /api/v1/inventory/{_id}:
 *   delete:
 *     summary: Delete a Single Product in the inventory.
 *     description: DELETE request to delete a product from the inventory.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         example: 61e7a0937983da208cda397f
 *         description: Numeric ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleting a product.
 */
