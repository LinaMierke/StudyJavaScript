/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

- confirmEnding("Connor", "n") should return false.

-confirmEnding("Bastian", "n") should return true.


*/

// idk how it work with target but I suppose: 
// google the string method for javascript, and base on that =>
//=> String.prototype.substring() // String.prototype.substr()

// "if the string last index is === to target return true? "
//how I find the last carachter index of a string? //..Hello => remember me?? SLICE!!! => (-1) ! yayy
//ok but slice works on just array?? so do i need to convert the string into an array?? 
// so split('')?/

function confirmEnding(str, target) {

// en la solucion decia que: 
//   return str.slice(-target.length) === target
// but I think this will work, idk 
    return str.slice(-1) === target;
    //^^ this will work if the target fuera solo la ultima letra, pero el target puede ser un grupoi de palabras como confirmEnding("Congratulation", "on"), entonces si nos toca (-target.length)
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on")



  //String.prototype.substr()
//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
//-----------------------------------------------------------------------
//String.prototype.substring()

//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"