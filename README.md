# dotpather

[![Build Status](http://img.shields.io/travis/jarofghosts/dotpather.svg?style=flat-square)](https://travis-ci.org/jarofghosts/dotpather)
[![npm install](http://img.shields.io/npm/dm/dotpather.svg?style=flat-square)](https://www.npmjs.org/package/dotpather)
[![npm version](https://img.shields.io/npm/v/dotpather.svg?style=flat-square)](https://www.npmjs.org/package/dotpather)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/dotpather.svg?style=flat-square)](https://github.com/jarofghosts/dotpather/blob/master/LICENSE)

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
