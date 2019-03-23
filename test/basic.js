const assert = require('assert');
describe('Basic', () => {
  it('should print test passed information', (done) => {
    setTimeout(() => {
      assert.equal(1 + 1, 2);
      done();
    }, 1000);

  });

  it('should not able to print additional message yet', (done) => {
    setTimeout(() => {
      assert.equal(42, 42, '額');
      done();
    }, 1000);
  });

  it('should only test in the correct environment', function(done) {
      this.skip();
      done();
  });

  it('should print swearing when tests fail', () => {
    assert.fail('我要崩潰了!');
  });
}).timeout(3000);
