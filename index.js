function dotPath(str) {
  var parts = str.toString().split('.');
  
  return function parse(obj, arr) {

    arr = arr !== undefined ? arr : parts.slice();
    
    if (!obj) { return undefined; }
    
    var check = arr[0];
    if (obj[check]) {
      return arr.length > 1 ? parse(obj[check], arr.slice(1)) : obj[check];
    }

    return undefined;
   

  }

}

module.exports = dotPath;
