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
      //<<< check if the loopIndex.property (mammal) is true or false is .mamamls because is looking at the porperty of the object in the array
    if (animals[i].mammal === true) {
        //if it is true, then it will push the index to array we created before -> the const mammals =[] 
      mammals.push(animals[i]);
    }
  }
  //and here simply return the array witht the values that fulfill the condition
  return mammals;
}


//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
/* ADD NEW PROPERTY AND VALUE TO OBJECT== 3 Different ways*/
//this is the initial object
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
}; 
//First way => dot notation
//here we have Object.property = value
tekkenCharacter.origin = 'South Korea';

// Second way => Bracket notation
// here we have the Object [property]= value, in this case if use if the property que queremos has a aspace on it so it will thanfer to the object with strings ans everything
tekkenCharacter['hair color'] = 'dyed orange';

//Third way => Declaring a const, and bracket notation
//here we declrae the const witht he property name we want
const eyes = 'eye color';
//Object[const] = "value"
tekkenCharacter[eyes] = 'brown';

// Final OUTPUT:
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};


//====================================================================
//Complex Object and how to add new properties and values 

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
/*nestedObject has three properties: id (value is a number), date (value is a string), and data (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:*/

nestedObject.data.onlineStatus.busy = 10;

//How to delete a property and value from an object

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// Only change code above this line

console.log(foods);



//------------------------------------------------------------------------------------- 
//-------------------------------------------------------------------------------------
//hasOwnProperty// 
// check if an object has an specific property of

//ONE : Object.hasOwnPropety('propertyName')
// TWO: 'Property' in Object


//-------------------------------------------------------------------------------------
//For ...in 
/* Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:*/

for (let user in users) {
  console.log(user);
}


//-===================
//Find they keys on the Object/// Oject constitution: 
// object, keys: values
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

//===================
// for(let user in users){
//console.log (users)
//}

//==============

/* */
const usersObj= {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
// create a function that counts how many users are online, so we create a function that passes the users as arguments
function countOnline(usersObj) {
  // Only change code below this line
  //create a variable where the count id gonna be storaged
let count = 0;
// for loop to go into each section of the object and here it is the new concept learnt => for (let user in users)

for(let user in usersObj){
  //if the  object[user].online that is the property is true, so is online
  if(usersObj[user].online === true){
    // count it and sum there 
    count++;
  }
}
//return the final number sum
return count;
  // Only change code above this line
}

//++++++++++++++++++++++ FOR++++++IN++++
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
for (variable in object)
  statement

  //another way 

  var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"