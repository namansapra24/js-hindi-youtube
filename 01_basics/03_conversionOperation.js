/*let score = "45"

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
console.log(typeof stringNumber); // even thoug output looks like a number, it is converted into string*/


//*******************Operations ********************

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2/2);
console.log(2%2);

let str1 = 1
let str2 = 2
let str3 = str1 + str2
console.log(str3)

console.log('1' + 2); //output 12
console.log(1 + '2'); // op 12
console.log('1' + 2 + 2); //op 122
console.log(1 + 2 + '2'); // op 32 as due to rules of js 

console.log(true)
console.log(+true);
console.log("");*/

let gameCounter = 100
gameCounter++ //postfix
console.log(gameCounter);
++gameCounter //prefix
console.log(gameCounter);