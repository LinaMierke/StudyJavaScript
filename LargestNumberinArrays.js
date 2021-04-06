/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]*/

// what I think? double loop?, find the max in it.. math.max?
// what i know to do: a simple loop
//what to google: how to js double loop, math.max

//++++++++++++++++++++++++++++++++++++++++++++Procedural approach
function largestNumArr() {
  //create a variable that hold the max of each inner array
  let max = [];
  // a loop that goes into each one of the arrays in the main array so [[array1], [arr2], [array3]]
  for (let i = 0; i < arr.length; i++) {
    //create a second variable to hold the largest number and initialise it with the first number, do it outside the loop so it wont be use or reassigned until we find a larger number.. so comoare with the first number in of each array
    let largest = arr[i][0];
    //now create the inner array
    for (let j = 0; j < arr[i].length; j++) {
      //now compare if the largest variable holding the number in position is smaller than the inner array number then if it is true, save it as the largest number
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    // here i don;t understand whi the return has an [i] along. After the inner loop, save the largest number in the corresponding position inside of the results array.
    return ([i] = largest);
  }
  return max;
}

//++++++++++++++++++++++++++++++++Declarative approach

function largestOf(arr) {
  //map into the main array to a new array with the .map()
  return arr.map(function (group) {
    //in each inner array and use the .reduce() to bring it just to one elenent where we have  a callback function and have the previous value and compare the 2 of them and
    return group.reduce(function (prev, current) {
      // will do a ternary and will return the current if it is higher if not will return the previous
      return current > prev ? current : prev;
    });
  });
}

///////// prototype.reduce

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
