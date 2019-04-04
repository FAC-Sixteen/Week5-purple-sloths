const supertest = require('supertest');
const test = require('tape');
const router = require('../router');

test('Initialise', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('Home returns status of 200', (t) => {
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
    // console.log(typeof(response.text));
    t.equal(typeof(response.text), 'string', 'Should return a string');
    t.end();
  })
});
