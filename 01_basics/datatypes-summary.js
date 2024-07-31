//Primitive

//7 Types = String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreVal = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // op is false as even though value is same but Symbol is unique

const bigNumber = 3245466546849864n

// Reference (Non-primitive)

// Arrays, Objects, Functions

const heros = ["Ironman", "Hulk", "Spiderman"] // Array in square brackets
{Name : "Naman"
    Age : 24    // Curly brackets is always objects
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreVal);
console.log(typeof myfunction);



//*******************Memory types********************

// Stack memory (Primitive), Heap Memory (Reference or Non primitive)

let name1 = "Naman"
let name2 = name1
name2 = "Sapra"

console.log(name1);
console.log(name2);

let user1 = {
    email: "na@google.com",
    city: "delhi"
}

let user2 = user1

//let user2.email = "na@na.com"    // unexpected error

console.log(user1.email);
console.log(user2.email);


//  Stack always gives copy of data and heap gives reference of the original data
  