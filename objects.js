//Everything in js is an object=======Its A wrong statement
//Everything in js can act an object.

/**********One way of creating a object */
var object = {id:1,
                name:"vicky"};
console.log(object.id + "_"+ object.name+object.address);


var x= object.address="najafgarh";
console.log(x);

object.showdetails = function(){
    console.log(this.id);
}
object.showdetails();

// var x = new object();
// console.log(x);


var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

var str = "vicky";
console.log(str.length); //Wrapper object

var s1 = new String("vicky");
var s2 = new Number(1);

console.log(s1.valueOf(s1));
console.log(s2.valueOf(s2));
