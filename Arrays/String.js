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

//OPTION 2
// create a for loop 
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  /*Starting at the last character of the string passed to the function, you build a new string reversedStr from str.

During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.

Finally, you return the final value of reversedStr. */