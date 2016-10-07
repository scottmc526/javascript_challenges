module.exports = {

  sameLength: function(string1, string2) {
    return string1.length === string2.length;
  },

  firstGreater: function(string1, string2) {
    return string1 > string2;
  },

    firstGreaterOrEqualTo: function(string1, string2) {
      if (string1 >= string2) {
        return true;
      } if (string1 < string2) {
        return false;
      }
    },

    firstLengthGreater: function(string1, string2) {
      if (string1.length > string2.length) {
        return true;
      } if (string1.length >= string2.length) {
        return false;
      }
    },

    secondGreater: function (string1, string2) {
      if (string2 > string1) {
        return true;
      } if (string1 >= string2) {
        return false;
      }
    },
}
