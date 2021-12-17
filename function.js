/*
Function are 3types
named function
anonymous function
immediately invoked function
*/
function add (a, b) {
    return a + b
  }
  console.log("Add is a named function : "+add(12, 9)) 

var multiply = function (a, b) {
    return a * b
}

console.log("Anonymous example: "+multiply(6, 78)) 

var subract = (function (a, b) {
    var result = a-b;
    console.log ("Immediately invoked:" +result)
  })(60, 9)