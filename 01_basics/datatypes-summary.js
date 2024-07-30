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