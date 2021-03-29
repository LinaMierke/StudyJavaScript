//I loearn factoria !n in math is when we have a number factorial !5 and we have the positive integers and multiply allof them so : 1x2x3x4x5 and the result is the factorial

//OPTION  1
//create a function with argument passing is the number that we will analize
function factorialize(num) {
    // we will use a recursion function so we usually need an if and else because that is how it works, so if the number to do the factorization is strict equal to 0, return 1
  if (num === 0) {
    return 1;
    // sino es 0 then, we will multiply 5 x the function recursion. in this case the function will run over and over until hits the condition 0 ... so  
  } else {
    return num * factorialize(num - 1);
    // here the function (num -1 ) will be first 4, then 3, 2, 1, and stops.. so 5*4*3*2*1 is equal to 120 that is the 5! = 1* 2 * 3* 4* 5 = 120
  }
}

factorialize(5);
//+++++++============= RECURSIVE FUNCTION: Generally, recursive functions are used to break down a big problem into smaller ones. You can find that they are heavily used in the data structures like binary trees and graphs and algorithms such as binary search and quicksort.// A recursive function always has a condition to stop calling itself, otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

function recurse() {
  if (condition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
// the recursion will be doing something inside the () just in that section

//Option 2 Ternary operator

function factorialize(n) {
  // if the number is less than 2 (then) ? return 1 (if it is not less than 1) : function (numero -1 )  that is the factorization in recursion por * el numero
  return n < 2 ? 1 : factorialize(n - 1) * n;
}

/*Understanding recursion

Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The very function is going to run inside itself interesting, Eh */