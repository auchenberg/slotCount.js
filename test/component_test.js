var slotCount = require('slotCount.js/slotCount.js');
var counter;

before(function () {
  counter = new slotCount(document.querySelector('.counter-box'), 10);
  setInterval(function() {
    var random = Math.floor(Math.random() * 50);
    counter.set(random);
  }, 2000);
});

describe('component test', function () {
  it('should load slotCount.js as a component', function (done) {
    if (slotCount == null) {
      done(new Error('slotCount is null'));
      return;
    }
    if (!counter instanceof slotCount) {
      done(new Error('counter not instance of slotCount'));
      return;
    }
    done();
  });
});
