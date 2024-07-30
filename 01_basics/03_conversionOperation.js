let score = "45"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score1 = "45abc"

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); //still outputs as number even though string in value
console.log( valueInNumber1); // output is Nan which is "Not a Number"

let score2 = null

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2); /*output is 0 even though value is null,
 for sring will be NaN, for boolean ie true false will ne 1,0 */

//conversion
//"45"=>45
//"45abc"=>NaN
// true =>1; false =>0

let isLoggedin1= 1
let booleanisLoggedIn1 = Boolean(isLoggedin1)
console.log(booleanisLoggedIn1);

// 1=> true; 0=> false
// "" =>false; "Naman"=> true


let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // even thoug output looks like a number, it is converted into string
