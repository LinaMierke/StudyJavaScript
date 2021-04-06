//How to determine if an array is in strinct order

//1.Ascending

//Create a function that takes the array as an argument
function strictascending(arr) {
  //if the length of the array is just 1, then it is.
  if (arr.length === 1) {
    return true;
  }
  //if the array is bigger than 1 then :
  //we will check if is increasing by creating a variable where the second number in the array minus the first array
  const check_direction = arr[1] - arr[0];
  //now we create a for loop that check each one of the elemnts in the array, if index - 1 is bigger than the length (can't be bigger than the array length) then go ahead and check the next number and keep checking each of the the elements
  // if cthe direction result and the array element number +1 and the element is smaller and = to 0 then is false.
  for (let i = 0; i < arr.length - 1; i++) {
    if (check_direction * (arr[i + 1] - arr[i]) <= 0) {
      return false;
    }
  }
  return true;
}

//***************************** Example */

/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array*/

function almostIncreasingSequence(arr) {
  var bad = 0;
  //normal loop to determine the array
  for (var i = 1; i < arr.length; i++)
    //if array element is less or equal to array element -1 then increase the bad variable
    if (arr[i] <= arr[i - 1]) {
      bad++;
      //if var bad is bigger tah 1 then return false
      if (bad > 1) return false;
      //if array element is less or = to eleent -2 AND element + 1 is less or = to element -1 return false

      if (arr[i] <= arr[i - 2] && arr[i + 1] <= arr[i - 1]) return false;
    }
  //if no then return true
  return true;
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
