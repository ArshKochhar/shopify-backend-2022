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






