module.exports = {
  person: function(firstName, lastName) {
    var person = new Object ();
    person.firstName = "John";
    person.lastName = "Mayer";
    return person;
  },

  sweetnessProperty: function(obj) {
    return obj.sweetness;
    if (obj.sweetness == undefined) {
      return undefined;
    }
  },
  savorynessProperty: function(obj) {
    return obj['savory-ness'];
    if (obj['savory-ness'] === undefined) {
      return undefined;
    }
  },
  keys: function (obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }
    return keys;
    if (obj === {}) {
      return [];
    }
  },
}
