module.exports = dotpath

function dotpath(str) {
  var parts = str.toString().split('.')
    , len = parts.length
  
  return function parse(obj) {
    var test_key

    if (obj === undefined) return undefined
    
    for (var i = 0; i < len; ++i) {
      test_key = parts[i]

      if (!obj || obj[test_key] === undefined) return undefined
      obj = obj[test_key]
    }

    return obj
  }
}
