## slotCount.js

### [Demo](http://auchenberg.github.com/slotCount.js)

Simple slot machine-like counter, inspired by Google Plus.

No dependencies. AMD and CJS compatible.

Works in modern browsers. Chrome, Firefox, Safari 6+, IE10+.

## Installation

#### Manually

Adding to your HTML file:

    <script src="/path_to_http_invoke/slotcount.js"></script>

#### with [Bower](http://bower.io)

    bower install slotcount

#### with [Component](https://github.com/component/component)

    component install auchenberg/slotcount
    
## Usage

```javascript
var counter = new slotCount(container, initialCount);

counter.set(newCount);
counter.dispose();
```

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

## License

    The MIT License (MIT)
