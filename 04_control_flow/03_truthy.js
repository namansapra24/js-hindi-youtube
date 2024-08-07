// falsy values
// false, 0, -0, 0n, bigInt, null, undefined, "", NaN

//truthy values
// true, "0", 'false', " ", [], {}, function() {}

let userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object")
}

// Nullish Coalescing Operator (??) - null, undefined
let val1
//val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);
// val1 = null ?? 10 ?? 20   // first real value will be assigned

// Terniary operator
// condition ? true : false

let iceTea = 100
iceTea <=80 ? console.log("Less than 80") : console.log("More than 80");



