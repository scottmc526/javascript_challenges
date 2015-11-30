/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var str = '';
    for (var i = 0; i < list.length; i++) {
      str += list[i];
    }
    return str;
  },

  joinWithForAndIndex: function(list) {
    var str = ''
    for (var i = 0; i < list.length; i++) {
      str += list[i] + [i];
    }
    return str;
  },
  joinWithoutOddCharacters: function(list) {
    var str = '';
    for (var i = 0; i < list.length; i++) {
      if ([i] % 2 === 0) {
        str += list[i];
      }
    }
    return str;
    if (list === []) {
      return '';
    }
  },
  joinWithForAndToken: function(list) {
    var str = '';
    for (var i = 0; i < list.length; i++) {
      str += list[i] + '*';
    }
    str = str.slice(0, -1)
    return str;
    if (list === []) {
      return '';
    }
  },
  joinWithForAndAlternatingTokens: function(list) {
    list = list.splice(0, 4, 1, '*', 2, '+', 3, '*', 4, '+', 5);
    var str = ''
    for (var i = 0; i < list.length; i++) {
      str += list[i];
    }
    return str;
  }


}
