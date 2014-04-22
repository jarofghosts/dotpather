module.exports = dotpath

function dotpath(str) {
  var parts = ('' + str).split('.')
    , len = parts.length
  
  return function parse(obj) {
    var test_key
    
    for(var i = 0; i < len; ++i) {
      test_key = parts[i]

      if(!obj) return

      obj = obj[test_key]
    }

    return obj
  }
}
