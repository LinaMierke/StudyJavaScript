//It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

function printManyTimes(str) {
  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");
