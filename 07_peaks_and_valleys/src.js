/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {

  peak: function() {
    return '/\\';
  },

  valley: function() {
    return '___'
  },

  peaks: function(number) {
    var output = '';
    for (var i = 0; i < number; i++) {
      output += this.peak();
    }
    return output;
  },

  valleys: function(number) {
    var output = '';
    for (var i = 0; i < number; i++) {
      output += this.valley();
    }
    return output;
  },

  peaksAndValleys: function(peak, valley) {
    var output = '';
    for (var i = 0; i < peak; i++) {
      output += this.peak();
    }
    for (var i = 0; i < valley; i++) {
      output+= this.valley();
    }
    return output;
  }
}
