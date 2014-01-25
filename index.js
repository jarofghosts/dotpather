module.exports = dot_path

function dot_path(str) {
  var parts = str.toString().split('.'),
      l = parts.length
  
  return function parse(obj) {
    var test_key

    if (obj == undefined) return undefined
    
    for (var i = 0; i < l; ++i) {
      test_key = parts[i]
      if (obj[test_key] === undefined) return undefined
      obj = obj[test_key]
    }

    return obj
  }
}
