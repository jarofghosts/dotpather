var dotpather = require('../index.js'),
    assert = require('assert');

var testPather1 = dotpather('check.the.attribute'),
    testPather2 = dotpather('check.that'),
    testObject1 = { check: { the: { attribute: 'wee' }, that: 'woo' } },
    testObject2 = { check: { the: { attribute: 'foo' }, that: 'bar' } };

assert.equal(testPather1(testObject1), 'wee');
assert.equal(testPather1(testObject2), 'foo');
assert.equal(testPather2(testObject1), 'woo');
assert.equal(testPather2(testObject2), 'bar');
assert.equal(testPather1({}), undefined);
assert.equal(testPather1(), undefined);
assert.equal(testPather1(null), undefined);

