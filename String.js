//How to reverse a string: step1=> make the string into a array with separate values: Yourstring.SPLIT("") // no space in the "" so it can work

//++++ Option 1: 
// split => to make it into an array []// .reverse() => change the order // .join("") => to put it togehteher and back into a string.

function reverseString(str) {
    return str
    .split("")
    .reverse()
    .join("");
  }
  
  reverseString("hello");

