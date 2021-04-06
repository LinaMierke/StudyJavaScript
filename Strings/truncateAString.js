/* Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

//I think e have to do slice or splice.. i will say slice and add the ... at the end : Did not work

function truncateString(str, num) {

// ternary operator: if el largo de la palabra es mayor al numero entonces devuelva el pedazo de la string que empieza en zero y termina en num( el numero que nos dan como target), mas una string que contengas ... osea "..." sino devuelva el string y y a
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
