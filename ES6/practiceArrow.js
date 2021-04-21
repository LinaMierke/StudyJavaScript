// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const newFilter = numbers.filter(nums => nums > 70 )
console.log(newFilter)

//result: [ 234, 74, 76, 92 ]

// 