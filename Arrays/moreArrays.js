//Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
/*matrix = [[0, 1, 1, 2], 
[0, 5, 0, 0], 
[2, 0, 3, 3]]
matrixElementsSum(matrix) = 9.
*/

function matrixElementsSum(matrix) {

}

// I think if the 0 is located in the same position in the array, like match the array positions and if it contains 0 don't count it?
// is there a way to match indexes of array? I think start with searching that part: how to check if the array is same number in the same index position in a group of array? 
// If ^^^ is possible, we can decide from there and do a for loop that follow the condition if X number in x index position is 0 dont count the elements after this. 

// or count the same index position but if it is 0 stop to count?


// found something called multidimensional array

//Good news: I found something called MULTIDIMENSIONAL ARRAY. put console.table(arrayName) -> shows a table

//here it is how to go in everysingle ong the every array: 

let activities = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
;

console.table(activities);
/* 
┌─────────┬───┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2 │ 3  │
├─────────┼───┼───┼───┼────┤
│    0    │ 1 │ 1 │ 1 │ 0  │
│    1    │ 0 │ 5 │ 0 │ 1  │
│    2    │ 2 │ 1 │ 3 │ 10 │
└─────────┴───┴───┴───┴────┘
*/

// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array Este is the main array you need to give it a name var, and use that int he next loop to do the array.length
    var innerArrayLength = activities[i].length;
    // loop the inner array, este es lo q contien dentro del array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

/* Output =
┌─────────┬───┬───┬───┬────┐
│ (index) │ 0 │ 1 │ 2 │ 3  │
├─────────┼───┼───┼───┼────┤
│    0    │ 1 │ 1 │ 1 │ 0  │
│    1    │ 0 │ 5 │ 0 │ 1  │
│    2    │ 2 │ 1 │ 3 │ 10 │
└─────────┴───┴───┴───┴────┘
[0,0] = 1
[0,1] = 1
[0,2] = 1
[0,3] = 0
[1,0] = 0
[1,1] = 5
[1,2] = 0
[1,3] = 1
[2,0] = 2
[2,1] = 1
[2,2] = 3
[2,3] = 10
*/

//We can also use this => 
// the array with an arrow function and a for Ech of the inside too WOWWW
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});

//get the first element of each array
//name the var and map with a funtion inside naming the i that is the index and tgen return what needs to return.
var res = activities.map(function(i) {
    return i[0];
  });


  // FINAL 

  function matrixElementsSum(matrix) {
    for(var r=0,j=0;j<matrix[0].length;j++){
        for(var i=0;i<matrix.length;i++){
          if(matrix[i][j]===0) break
          else r+=matrix[i][j]
        }
    }
    return r
  }

  //Other option 

  function matrixElementsSum(matrix) {
    var total = 0;
    
    // Navigate each column of rooms
    // i = current column, j = current floor in column
    for (var i = 0; i < matrix[0].length; i++) {
            
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                // This room is haunted, so we don't care about the rooms below it. 
                // Continue to the next column of rooms
                break;
            }
            total += matrix[j][i];
        }
        
    }
    
    return total;
}
  
