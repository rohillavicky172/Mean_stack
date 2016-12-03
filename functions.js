//Self Executable functions

(function(){
var x = 5;
var y = "Hello I am a Self Executable function";

console.log(x + y);
})();

// Declartion of variable 
// When we declare a variable without var keyword in javascript then it will act as global variable

function  global_variabel(){
    z = 5;
    var y = 6;
     z = z*y;
    console.log(z +"Value of Z inside the function");
}

global_variabel();
//z = 7;
console.log(z + "value of z accessing globally ");

/************************JavaScript Hoisting*****************************************/ 
//Hoisting is JavaScript's default behavior of moving declarations to the top.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// JavaScript only hoists declarations, not initializations.

// 
/*
Variable Hoisting
All variable declarations are hoisted (lifted and declared) to the top of the function, if defined in a function, or the top of the global context, if outside a function.

It is important to know that only variable declarations are hoisted to the top, not variable initialization or assignments (when the variable is assigned a value).*/ 

function  jsHoisting(){
    z = 5;
    var y = 6;
    var z = z*y;// Here is hoisting oocurs: In other words; a variable can be used before it has been declared.
    console.log(z +"Value of Z Using the hoisting functionality");
}

jsHoisting();


function showName () {
console.log ("First Name: " + name);
var name = "Ford";
console.log ("Last Name: " + name);
}
showName(); 

// Function Declaration Overrides Variable Declaration When Hoisted
// Both function declaration and variable declarations are hoisted to the top of the containing scope. And function declaration takes precedence over variable declarations (but not over variable assignment). As is noted above, variable assignment is not hoisted, and neither is function assignment. As a reminder, this is a function assignment: var myFunction = function () {}.
// Here is a basic example to demonstrate:



function add(x,y){
    return x+y;
}
console.log(add(44,44));

 add=5;
console.log(add);