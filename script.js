//var let const -types of keyword
var value1=10;
var value2=12;
var result;

console.log(result);
result=value1+value2;
var val2 =document.querySelector(".add");
val2.innerHTML= "Addition of " +value1+ " and "+value2;
var val1 = document.querySelector(".val1");
val1.innerHTML = "Result is :" + result;
let a = 9;
// let a = 10;//Uncaught SyntaxError: Identifier 'a' has already been declared
a = 5;
console.log(a);
const a1=8;
//const a1=7; Identifier 'a1' has already been declared
console.log(a1);


var mybutton = document.createElement("button");

mybutton.innerHTML= "Javascript";
document.body.appendChild(mybutton);

