// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

// For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
// Here the console will display the values [0, 1, 2] and 3.

// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// console.log(i);
// Here the console will display the values [0, 1, 2] and 3.

// This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// Here the console will display the value 3.

// As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
// Here the console will display the value 2, and an error that i is not defined.

// i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

//+++++++++WES BOS! +++++++++
// varhere will print 100, if they are var {} is like a jail that is only available inside , so if i try to consoloe.log width it won't work because is outside the scope.
function setWidth() {
  width = 100;
  console.log(width);
}
setWidth();
// here we declare the age outside but the dogYears is inside the {} jail too, but if you run it it will print the result?? why? because is not inside  afunction, it is inside a if statement(block scope)..if we change the var to LET dogYears won't work
var age = 100;
if (age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

// var is function scope and let and const are block scope
//var you can reuse the variable name, and won;t tell you.. with let you can not reassignet the value
//let you can update the info i and const can't change

//use in afor loop with var: the result of i will be 10 becauase is changing the variable, overwritting it.

for (var i = 0; i < 10; i++) {
  console.log(i);
  //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.= 1000 means 1000ms and is 1 sec. TIP runs one time if you need it to run constantly you need to use something called setInterval(), and use clearTimeout() to prevent the function from running
  setTimeout(function () {
    console.log("the number is " + i);
  }, 1000);
}
//if we change the var in the for loop to a let: 

for (let i = 0; i < 10; i++){
  console.log(i);
  setTimeout(function(){
    console.log('The number is ' + i);
  }, 1000)
}
//this will be the result:

/*
1
2
3
4
5
6
7
8
9
The number is 0
The number is 1
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/
