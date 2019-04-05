const supertest = require('supertest');
const test = require('tape');
const router = require('../router');

//Home route tests

test('Home route returns status of 200', (t) => {
  supertest(router)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200, 'Should return 200');
    t.end();
  })
});

test('Home returns the response', (t) => {
  supertest(router)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err, response) => {
    t.error(err);
    t.equal(typeof(response.text), 'string', 'Should return a string');
    t.end();
  })
});


//Public route tests

test('style.css in public route returns status of 200', (t) => {
  supertest(router)
  .get('/public/style.css')
  .expect(200)
  .expect('Content-Type', /css/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200, 'Should return 200');
    t.end();
  })
})

test('dom.js in public route returns status of 200', (t) => {
  supertest(router)
  .get('/public/dom.js')
  .expect(200)
  .expect('Content-Type', /javascript/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200, 'Should return 200');
    t.end();
  })
})

test('public route returns the response for dom.js', (t) => {
  supertest(router)
  .get('/public/dom.js')
  .expect(200)
  .expect('Content-Type', /javascript/)
  .end((err, response) => {
    t.error(err);
    t.equal(typeof(response.text), 'string', 'Should return a string');
    t.end();
  })
});



//404 route tests

test('404 route returns status of 404', (t) => {
  supertest(router)
  .get('/elephants')
  .expect(404)
  .expect('Content-Type', /html/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 404, 'Should return 404');
    t.end();
  })
})

test('404 returns the response', (t) => {
  supertest(router)
  .get('/elephants')
  .expect(404)
  .expect('Content-Type', /html/)
  .end((err, response) => {
    t.error(err);
    t.equal(typeof(response.text), 'string', 'Should return a string');
    t.end();
  })
});




