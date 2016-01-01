var test = require('tape')

var dotpather = require('../index.js')

test('returns value at property', function (t) {
  t.plan(2)

  var lookup = dotpather('check')

  t.equal(lookup({check: 'woo'}), 'woo')
  t.deepEqual(lookup({check: {derp: true}}), {derp: true})
})

test('finds nested values', function (t) {
  t.plan(1)

  var lookup = dotpather('check.that.attribute')

  t.equal(lookup({check: {that: {attribute: 666}}}), 666)
})

test('returns undefined if path not found', function (t) {
  t.plan(1)

  var lookup = dotpather('invalid.path')

  t.equal(lookup({valid: {path: true}}), void 0)
})

test('properly returns falsey values', function (t) {
  t.plan(2)

  var lookup = dotpather('falsey.value')

  t.equal(lookup({falsey: {value: false}}), false)
  t.equal(lookup({falsey: {value: null}}), null)
})

test('works on arrays also', function (t) {
  t.plan(1)

  var lookup = dotpather('arr.1')

  t.equal(lookup({arr: [44, 22]}), 22)
})
