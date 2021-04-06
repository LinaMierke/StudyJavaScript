/* Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

//i find the repeat() to figure what is it about?
// maybe use multiplication to do this? 
// use conditional first to determine if the num is positive or negative :
/* Math.sign()
The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.*/
// ^^  good learning but is not that way, we have to do a for loop?

function repeatStringNumTimes(str, num) {
    //create a variable that holds the string
    var accumulatedStr = "";
  // mientras q el num de veces sea mayor a 0 
    while (num > 0) {
        // entonces sumar la string en el acumulador, y asi hasta q la condicion num > 0 sea 0 entonces para y el numero lo va bajando entonces si el numero es 20, el el siguiente sera 19 y el siguiente 18, 17, 16... menos y menos veces 
      accumulatedStr += str;
      num--;
    }
  // vamos a devolver donde esta la string acumulada""
      return accumulatedStr;
  }

  //++++++++++++++++

  function repeatStringNumTimes(str, num) {
      // si el numero que nos dan es menor a 1 entonces devuleva las " empty string"
    if (num < 1) {
      return "";
      //sino, devuelva el string mas otra ves la funcion osea va a imprimir el string mas cada ves q se llam la funcion va a ser un numero menor y menos.. un callback function is it?
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }

  //++++++++ 

  //lo mismo que ^^^ pero con ternary

  function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }