//Given an array containing a list of animal objects, return a new array containing only the animals which are mammals. Each animal object contains an animal name (i.e. dog or snake) and a value, mammal, which is a boolean indicating whether the animal is a mammal.


// create an array containing name anaimal, inside it contains objects {prop: value}
animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
   },
];
// create a function passing the array as argument
function findMammalsforLoop(animals) {
    //create a consta that is going to contain the new array
  const mammals = [];
  //did a for loop that is going to visit everyone of the elements of the array and >>>
  for (let i = 0; i < animals.length; i++) {
      //<<< check if the loopIndex.property (mammal) is true or false
    if (animals[i].mammal === true) {
        //if it is true, then it will push the index to array we created before -> the const mammals =[] 
      mammals.push(animals[i]);
    }
  }
  //and here simply return the array witht the values that fulfill the condition
  return mammals;
}
