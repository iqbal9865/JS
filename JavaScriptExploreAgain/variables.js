// In this Program I will demostrate the difference between var and let variable
//one
var names  = "React.Js";
console.log(names);

var names = "Angular.Js"; 
console.log(names);

/* That means you can redeclare and reassigned the variable using var.
   You can't redeclare let variable, but you can reassigned it.
*/

//two
let waterpotColor = 'green';
console.log(waterpotColor);

waterpotColor = 'blue';
console.log(waterpotColor);

// variable using var is global scope
/* but varibale using let is block scope.

***** example of block  ****  
for { 
    ...block scope... 
}
if () {
    ... block scope...
} 
etc.*/

if (true) {
    var numberOne = 1;
    let numberTwo = 2;
    console.log(numberOne);
    console.log(numberTwo);
}
console.log(numberOne);
// console.log(numberTwo); you can't access number two here because it is block scope variable

// three
/* 
variable using var is hoisted top of the global scope and assigned a default value as undefined, let variable is also hoisted on the top but never assign any default value like 
var carName = "BMW"; 
 carName = undefined; 
 */

carName = "BMW";
var carName;
console.log(carName);

// bikeName = "Kawasaki Ninja";
// let bikeName;
// console.log(bikeName);
// hoisting faild for there are no default value as undefined, i mean not initialize



