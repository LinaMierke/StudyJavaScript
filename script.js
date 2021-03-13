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

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
