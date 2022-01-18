# Express API Starter

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Development

```
npm run dev
```

# Production API - Hosted on Heroku

Please follow the URL below to view the API in action in production on Heroku:
```
https://shopify-crud-backend-2022.herokuapp.com/swagger/
```
Here is a video that runs through the demo of the application on the Production Link.


# Getting Started

Once you have cloned the repository, and ran the commands above - to recap:
```
npm install
```
```
npm run dev
```

You should see the following in your console (the application will be running on PORT 5000):
```
Shopify Inventory -  CRUD API Listening
```

Now in order to test the API locally, I have created a UI for testing, which essentially provides the same functionality as `Postman`. This libarary is called `Swagger UI`. This libary allows for ease in testing the API, and documents all the endpoints quite well.

In order to access this, paste the following URL in your browser of choice: 
```
http://localhost:5000/swagger/
```
<img width="1786" alt="Screen Shot 2022-01-18 at 10 41 00 AM" src="https://user-images.githubusercontent.com/51424592/149969250-dd5377a5-c37d-48b2-913a-2fe0cfdce3a9.png">

As seen in the image above, you can see all the different endpoints that are built for the CRUD operations and the additional feature.

After arriving at this page, upon clicking each endpoint, you will see a sample `Response Body` & expected `status code`. To test out each of these endpoints, you will be required to `click on the endpoint`, click on `try it now` and then `Execute`. 

Please note that some of the requests require a `body` or `query parameters` or both. You will be prompted for either of these requirements to complete the request.

# Additonal Feature on Local Server

The additional feature that I have implemented is the `Export inventory data in CSV by clicking a button`. Upon clicking the `Try it now`, for the following two endpoints:

<img width="1451" alt="Screen Shot 2022-01-18 at 11 28 59 AM" src="https://user-images.githubusercontent.com/51424592/150003649-5dc4c65e-9d61-45a4-bf0f-750e9b2eb32f.png">

Upon a successful request, you will receive an option to download the `CSV` as follows (bottom right of the image below):

<img width="1397" alt="Screen Shot 2022-01-18 at 2 17 25 PM" src="https://user-images.githubusercontent.com/51424592/150003866-2e322278-30c5-49b9-8b7d-b6a42fee7f9d.png">


# Running Tests

I have written out test cases for each of these endpoints, where it would `fail` , and where it would `pass`. Please note that the first time that you run these test cases all of them will pass, however the second time, 2 will not. This is because the `POST` and `DELETE` request have already been succesfull the first time around. 

- For the `POST` request, this means that an object with the same fields has already been created and the database cannot contain duplicates
- For the `DELETE` request, this means that an object with the given `_id` has already been deleted, and so an item that doesn't exist in the database cannot be deleted

I have provided extra sample data and _id's for these two requests to succeed if you wish to run the test's again. (if you wish to run multiple tests, the fields can be changed from this data)

`Data for POST request`
```
{
  "name": "Canada Goose Jacket",
  "category": "clothes",
  "price": "1000.99",
  "quantity": "5",
  "url": "https://www.canadagoose.com/ca/en/macmillan-parka-801688475735.html"
}
```
`_id for DELETE request`
```
61e3a3053cfb29aaa73e7eab
61e64c1e56a84879f3847f98
```

The tests can be found in `/inventory-shopify/test/api.test.js`
- In order to run these tests you must run the command `npm run test`








