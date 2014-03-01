var dotpather = require('../index.js')
  , assert = require('assert')

var testPather1 = dotpather('check.the.attribute')
  , testPather2 = dotpather('check.that')
  , testObject1 = {check: {the: {attribute: 'wee' }, that: 'woo'}}
  , testObject2 = {check: {the: {attribute: 'foo' }, that: 'bar'}}

assert.strictEqual(testPather1(testObject1), 'wee');
assert.strictEqual(testPather1(testObject2), 'foo');
assert.strictEqual(testPather2(testObject1), 'woo');
assert.strictEqual(testPather2(testObject2), 'bar');
assert.strictEqual(testPather1({}), undefined);
assert.strictEqual(testPather1(), undefined);
assert.strictEqual(testPather1(null), undefined);
assert.strictEqual(dotpather('a.b.c')({a: {b: {c: false }}}), false)
assert.strictEqual(dotpather('a')({a: null}), null)
