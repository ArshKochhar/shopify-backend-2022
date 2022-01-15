/* eslint-disable consistent-return */
const request = require('supertest');

const app = require('../src/app');

// GET all products
describe('GET /api/v1/inventory/', () => {
  it('responds with a json containing a list of all products', (done) => {
    request(app)
      .get('/api/v1/inventory/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// GET request to retreive a product with a given ID
describe('GET /api/v1/inventory/:id', () => {
  it('responds with a 200 to retreive a product with a given ID', (done) => {
    request(app)
      .get('/api/v1/inventory/61db39f58680f23058c00562')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// GET request to retreive and item with an _ID that does not exist
describe('GET /api/v1/inventory/:id', () => {
  it('responds with `Not Found` error message', (done) => {
    request(app)
      .get('/api/v1/inventory/61db39f58680f23058c00588')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// ________________________________________________________________
// POST request to add a NEW item to the inventory
describe('POST /api/v1/inventory/', () => {
  const data = {
    name: 'Magenta Denim Jacket', // Change name if you want to test again or you will receive a 500
    category: 'clothes',
    price: '22',
    quantity: '5'
  };
  it('respond with 200, new item created', (done) => {
    request(app)
      .post('/api/v1/inventory/')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST request to add an item that does not have ALL the required properties
describe('POST /api/v1/inventory/', () => {
  const data = { // Change name if you want to test again or you will receive a 500
    category: 'clothes',
    price: '22',
    quantity: '5'
  };
  it('respond with 500, Because not all required fields are presented', (done) => {
    request(app)
      .post('/api/v1/inventory/')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST request to add an ALREADY EXISTING item to the inventory
describe('POST /api/v1/inventory/', () => {
  const data = {
    name: 'Blue Denim Jacket', // Change name if you want to test again or you will receive a 500 status code
    category: 'clothes',
    price: '43',
    quantity: '5'
  };
  it('respond with 500, because this product already exists', (done) => {
    request(app)
      .post('/api/v1/inventory/')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// ________________________________________________________________

// PUT: Updating an item with a different property
describe('PUT /api/v1/inventory/:id', () => {
  const data = {
    name: 'Red Denim Jacket',
    category: 'clothes',
    price: '21',
    quantity: '2'
  };
  it('respond with 200, Updates the existing product in the database', (done) => {
    request(app)
      .put('/api/v1/inventory/61e253826faf6e6eda533cd5')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// PUT: Updating an item that doesn't exist with a different property
describe('PUT /api/v1/inventory/:id', () => {
  const data = {
    name: 'White Denim Jacket',
    category: 'clothes',
    price: '44',
    quantity: '2'
  };
  it('respond with 404, Fails to update a product that doesnt exist in the database', (done) => {
    request(app)
      .put('/api/v1/inventory/61e2686a34d67909e08f13e4')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// ________________________________________________________________

// DELETE request to delete and item with an _ID that does not exist
describe('DELETE /api/v1/inventory/:id', () => {
  it('responds with 500 to delete a product that does not exist', (done) => {
    request(app)
      .delete('/api/v1/inventory/61e25bb418564a7bdb0daaf1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE request to delete and item given an ID
describe('DELETE /api/v1/inventory/:id', () => {
  it('respond with 200, Deletes existing item from the database', (done) => {
    request(app)
      .delete('/api/v1/inventory/61e2664a3e982505a0fbdc64')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
