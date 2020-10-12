/**
 * Creates nicely looking string representation of object.
 *
 * @param {Object} objectToFormat the object to format into a string.
 */
exports.prettyString = function prettyString(objectToFormat) {
  return JSON.stringify(objectToFormat, undefined, 2);
};

/**
 * Tests if x is of wanted type.
 *
 * @param {*} x the thing to check for
 * @param {String} wantedType the expected or wanted type
 */
exports.isType = function isType(x, wantedType) {
  return Object.prototype.toString.call(x) === `[object ${wantedType}]`;
};

/* This code is here for demonstration purposes. For some it may be useful.

// Create String.format method for us to use in the code.
if (!String.format) {
  String.format = function (format) {
    let args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  };
}

// Create Array.last method for us to use in the code.
if (!Array.last) {
  Array.last = function () {
    return this[this.length - 1];
  };
}
*/
