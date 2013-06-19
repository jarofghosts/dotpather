dotpather
===

Utility for traversing objects based on dot paths

## usage

````js
var dotpather = require('dotpather'),
    renderer = dotpather('whatever.route.you.want'),
    result = renderer({ whatever: { route: { you: { want: 'bingo' } } } });

console.log(result); // "bingo"

var badResults = renderer({}) || renderer() || renderer(null);

console.log(badResults); // "undefined"
````

## license

MIT
