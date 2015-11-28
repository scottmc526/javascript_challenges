module.exports = {

  first: function(array) {
    return array[0];
    if (array === []) {
      return undefined;
    }
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
  union: function(array) {
    
  }


}
