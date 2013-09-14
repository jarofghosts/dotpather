function dotPath(str) {
  var parts = str.toString().split('.'),
      l = parts.length;
  
  return function parse(obj) {

    if (obj == undefined) return undefined;
    
    var i = 0;
    for (; i < l; ++i) {
      var testKey = parts[i];
      if (obj[testKey] == undefined) return undefined;
      obj = obj[testKey];
    }

    return obj;
  }

}

module.exports = dotPath;
