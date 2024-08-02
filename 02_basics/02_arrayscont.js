const Marvel = ["Ironman", "Hulk", "Thor"]
const DC = ["Superman", "Batman", "Flash"]

// Marvel.push(DC)
// console.log(Marvel);  // push fn considered DC array as one element 
// console.log(Marvel[3]);  // entire array is one element
// console.log(Marvel[3] [2]);  // finds array witin array

const Combined = Marvel.concat(DC)  // cn combine nly 2 array
console.log(Combined);

const allHeros = [...Marvel, ...DC] // can combine multiple array
console.log(allHeros);

const sample = [1, [2, [3, [4, [5, [6]]]]]]
const simplified = sample.flat(Infinity)   // concatinates all sub array into a new simplified array
console.log(simplified);

const Arr = Array.isArray("NAMAN")
console.log(Arr);
console.log(Array.from("NAMAN"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
