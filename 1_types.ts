//Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

//Number
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

//String
const message: string = "Hello Typescript";

//Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "Typescript"];

//Tuple
const contact: [string, number] = ["Artem", 1234567];

//Any
let variable: any = 42;
//...
variable = "New String";
variable = [];

//Function
function sayMyName(name: string): void {
	console.log(name);
}

sayMyName("Artem");

//Never
function throwError(message: string): never {
	throw new Error(message);
}

function infinite(): never {
	while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true;

type someType = string | null | undefined;
