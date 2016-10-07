module.exports = {

  first: function(array) {
    return array.length > 0 ? array[0] : undefined;
  },

  last: function (array) {
    return array[array.length - 1];
    if (array === []) {
      return undefined;
    }
  },

  empty: function(array) {
    if (array.length === 0){
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, n) {
    if (array.length === 0){
      return [];
    }
    while (array.length < n) {
      return array;
    }
    while (array.length = n) {
      return array;
    }
  },
  last_n: function(array, n) {
    if (array.length === 0) {
      return [];
    }
    while (array.length < n) {
      return array;
    }
    array = array.slice(-n);
    return array;
  },
  drop: function(array, n) {
      array = array.slice(n);
      return array;
      if (array.slice(n) > array.length) {
        return [];
      }
  },
  union: function(array1, array2) {
    var newArray = array1.concat(array2);
    return newArray;
  },
  intersection: function(array1, array2) {
    var javaScott = []
    for (var i = 0; i < array1.length; i++) {
      for (var b = 0; i < array2.length; b++) {
        if(array1[i] === array2[b]) {
          javaScott.push(array2[b])
        }
      }
    }
    return javaScott
  },
}
