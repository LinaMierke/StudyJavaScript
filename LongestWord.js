//Find the longest work in a string

// what I think: I think first we need to turn the instring into an array when each word is element in the string
//then check the length of each one and return the longest length

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// to get the length of a string is string.length()
// so how to do it whith each word and then compare to get the longest
// how to find the longest number in  a group of numbers is Math.mac(numeros) // si es un array is Math.max(...array)//
// Separar palabra por palabra es con string.SPLIT(" espacio aca ")
var str = "How are you doing today?";
var res = str.split(" ");
console.log(res);
//[ 'How', 'are', 'you', 'doing', 'today?' ]

//then I will separate the sentence into an array of words
// I will do afor loop that will count the length of each word and will storage the resutl into  avariable and then I will get the max number of that array variable and get the result

//SOLUTION SIMILAR

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
/*Code Explanation
  We provide Math.max with the length of each word as argument, and it will simply return the highest of all.
  
  Let’s analyze everything inside the Math.max parenthesees to understand how we do that.
  
  str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].
  
  Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().
  
  str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]
  
  Finally, we pass the array as argument for the Math.max function with the spread operator ...
  
  //map is use when we are working and we will return an array */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Solution 2

function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//option 3

function findLongestWordLength(str) {
  //romper la oracion por cada palabra
  let words = str.split(" ");
  //declarar una variable donde se van a almacenar los largos
  let maxlength = 0;

  // create a for loop que pase por cada una de las palabras

  for (let i = 0; i < words.length; i++) {
    //dentro del loop hacer un if, and if the length of each word is bigger than the maxlength osea 0 , entonces
    if (words[i].length > maxlength) {
      //el maxlength va a ser igual a el largo de la palabra
      //! acuerdate que cada loop es un length differente , osea esta compando al largo de la anterior palabra y asi sucesivamente
      maxlength = words[i].length;
    }
  }
  return maxlength;
}
