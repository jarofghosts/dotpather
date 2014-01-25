dotpather
===

[![Build Status](https://travis-ci.org/jarofghosts/dotpather.png?branch=master)](https://travis-ci.org/jarofghosts/dotpather)

Utility for looking up object properties based on dot-paths

## usage

```js
var dotpather = require('dotpather'),
    renderer = dotpather('whatever.route.you.want'),
    result = renderer({ whatever: { route: { you: { want: 'bingo' }}}})

console.log(result) // "bingo"

var badResults = renderer({}) || renderer() || renderer(null)

console.log(badResults); // "undefined"
```

## license

MIT
