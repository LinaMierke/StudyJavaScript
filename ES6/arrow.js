// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:

const myFunc = function () {
  const myVar = "value";
  return myVar;
};
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
};
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";
// This code will still return the string value by default.

//+++++++++WES BOS+++++

const names = ["wes", "kait", "lux"];

const fullNames = names.map(function (name) {
  return `${name} bos`;
});

const fullNames2 = names.map((name) => {
  return `${name} bos`;
});

const fullNames3 = names.map((name) => {
  return `${name} bos`;
});
const fullName4 = names.map((name) => `${name} bos`);
const fullName5 = mames.map(() => `cool bos`);

//arrow functions are always annonymous and name function is:

function sayMuName(name) {
  alert(`Hello ${name}`);
}
//now as an annonymous funtion we can't name it but we can declare it under a const

const sayMyName2 = (name) => {
  alert(`Hello ${name}`);
};
sayMyName2("Lina");
