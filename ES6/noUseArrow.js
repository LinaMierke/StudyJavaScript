//example 1: When you really need the keyword THIS:

/*{ <style>
    button{ font-size: 100px;}
    .on{
        background: #ffc600
    }
</style>
<button id= "pushy"> Push Me </button>
} */

const button = document.querySelector("#pushy");
button.addEventListener("click", () => {
  console.log(this); // aqui hay arrow asi  que nos dara window
  this.classList.toggle("on");
});
//la forma correcta seria:

const button = document.querySelector("#pushy");
button.addEventListener("click", function () {
  console.log(this); // aqui hay function entonces saldria : <button....> eso es el this
  this.classList.toggle("on");
});

// when you need a method inside an object
const person = {
  points: 23,
  score: function () {
    console.log(this);
    //esto me daria: object: points 23....object, points 24
    this.points++;
  },
};

// class. especialmente cuando se usa la palabra this.. aca se remplazo el arrow function en la parte del prototipo

class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const beemer = new Car("bmw", "blue");
const subie = new Car("Subaru", "white");

Car.prototype.summarize = function () {
  return `This car is a ${this.make} in the color ${this.color}`;
};
//the result will be: subie.sumarize
// This car is a subaru in the color white

// when you need the ARGUMENTS object.. arguments in js son : arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

const orderChildren = function() {
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was child # ${i + 1}`;
  });
  console.log(arguments);
};
orderChildren("Dioma", "Enny", "Yurys");
