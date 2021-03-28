/* Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

/* indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists). */

/*indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.*/
 //-1 means that doesn't exist, so when I add -1 I indicate if the element != -1 then you can add it to 
function quickCheck(arr, elem) {
    // Only change code below this line
  if(arr.indexOf(elem)!= -1){
    return true
  } else{
    return false
  }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


  /* Find the index position of a element in an array */

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
//search in the array the position idex of element
var idx = array.indexOf(element);
// in indexOF -1 indicates that doesn't exist : so => mientras que ^ en idx don't be there.

while (idx != -1) {
  //push to the new empty array
  indices.push(idx);
  // but idx now is find the index of element , in 
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]