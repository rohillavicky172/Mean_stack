/*Variables in Javascript*/ 
var x = 5; //Nuumber not integer it supports all the range of int, float etc.
var y = 7;
var z = "This is String"; //String same as other programming languages. //This is a gloabal variable.
var xx = null; //Null Trival datatype 
var yy = undefined; //it is also Trival Data Type.
var zz = false;// boolean datatype
var xxx = true;// boolean datatype
console.log(x+y);

/*Variable defined or declared in javascript does not have function scope means they can be access by accessed out of function*/
/*This is function*/
function Variable_scope(){
    var x = "This is Number"; //Here it is a locla variable.
    console.log(x);
} 

Variable_scope(); //Calling a function.
console.log(x);


console.log(x/y);
console.log(x/z);
console.log(x/xx);
console.log(x/yy);

console.log(z/x);
console.log(z/z);
console.log(z/xx);
console.log(z/yy);

console.log(xx/x);
console.log(xx/z);
console.log(xx/xx);
console.log(xx/yy);