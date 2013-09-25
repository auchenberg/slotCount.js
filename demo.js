(function() {
  'use strict';

  var counter = new slotCount(document.querySelector('.counter-box'), 10);

  setInterval(function() {
    var random = Math.floor(Math.random() * 50);
    counter.set(random);
  }, 2000);

})();
