//Boolean
var isFetching = true;
var isLoading = false;
//Number
var int = 42;
var float = 4.2;
var num = 3e10;
//String
var message = "Hello Typescript";
//Array
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello", "Typescript"];
//Tuple
var contact = ["Artem", 1234567];
//Any
var variable = 42;
//...
variable = "New String";
variable = [];
//Function
function sayMyName(name) {
    console.log(name);
}
sayMyName("Artem");
//Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = "admin";
var id1 = 1234;
var id2 = "1234";
