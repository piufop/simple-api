const assert = require('assert');
const app = require('../index');

describe('Tests', () => {
  before(() => {
    // runs before all tests in this block
  });

  after(() => {
    // runs after all tests in this block
  });

  beforeEach(() => {
    // runs before each test in this block
  });

  afterEach(() => {
    // runs after each test in this block
  });

  describe('Hey ho tests go', () => {
    it('should test something', (done) => {
      assert.ok(true);
      done();
    });
  });
});
