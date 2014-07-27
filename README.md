dotpather
=========

[![Build Status](http://img.shields.io/travis/jarofghosts/dotpather.svg?style=flat)](https://travis-ci.org/jarofghosts/dotpather)
[![npm install](http://img.shields.io/npm/dm/dotpather.svg?style=flat)](https://www.npmjs.org/package/dotpather)

Utility for looking up object properties based on dot-paths

## usage

```js
var dotpather = require('dotpather')

var lookup = dotpather('whatever.route.you.want')

var result = lookup({whatever: {route: {you: {want: 'bingo'}}}})

console.log(result) // "bingo"

var badResults = renderer({}) || renderer() || renderer(null)

console.log(badResults) // undefined
```

## license

MIT
