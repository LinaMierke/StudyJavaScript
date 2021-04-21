// dentro d elos argumentos de la funcion, podemos declarar los valores determinados para ciertos argumentos en caso de que nosotros sepamos q son valores q no van a vcambiar
function calculateBill(total, tax = 1.13, tio = 0.18) {
  return total + total * tax + total * tip;
}
const totalBill = calculateBill(100);
console.log(totalBill);

//128

// tambien podemos dejarlo como indefinito encaso de que alguno valores los queramos cambiar, no podemos dejar el espacio vacio:

const totalBill2 = calculateBill(100, undefined, 0.25);
//138