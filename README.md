## slotCount.js

Component version.

For normal version and installs with bower see the original repository. The original version is available as CommonJS, AMD or in the global scope.

### [Demo](http://auchenberg.github.com/slotCount.js)

Simple slot machine-like counter, inspired by Google Plus.

## Usage

```javascript
var counter = new slotCount(container, initialCount);

counter.set(newCount);
counter.dispose();
```

## Test

You can test the component implementation of slotCount.js with Mocha in your browser. Make sure you run ```component build``` and then point your browser locally to test/index.html.

## Examples

### Random number every 2000ms

```javascript
var counter = new slotCount(document.querySelector('.counter-box'), 10);

setInterval(function() {
  var random = Math.floor(Math.random() * 50);
  counter.set(random);
}, 2000);
```

## Credits
slotCount.js is a project by [Kenneth Auchenberg](http://kenneth.io)
