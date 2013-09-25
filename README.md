## slotCount.js

### [Demo](http://auchenberg.github.com/slotCount.js/demo) &nbsp;&nbsp; [Documentation](http://auchenberg.github.com/slotCount.js)

Simple slot machine-like counter, inspired by Google Plus.

No dependencies. AMD and CJS compatible.

Works in modern browsers. Chrome, Firefox, Safari 6+, IE10+.

## Usage

```javascript
var counter = new slotCount(container, initialCount);

counter.set(newCount);
counter.dispose();
```

### AMD module

```javascript
define(['slotCount'], function(slotCount) {
  var counter = new slotCount(document.querySelector('.counter-box'), 10);
  ...
}
```

### Example: Random number every 2000ms

```javascript
var counter = new slotCount(document.querySelector('.counter-box'), 10);

setInterval(function() {
  var random = Math.floor(Math.random() * 50);
  counter.set(random);
}, 2000);
```

## Credits
slotCount.js is a project by [Kenneth Auchenberg](http://kenneth.io)
