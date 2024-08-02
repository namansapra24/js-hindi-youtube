const myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]);

const newArray = new Array("A", "B", "C", "D")
console.log(newArray);

//Array Methods

myArray.push(18)
console.log(myArray);  //adds to the array

myArray.pop()
console.log(myArray);  // removes the last added value

myArray.unshift(48)
console.log(myArray);  // adds a value in the start of the array

myArray.shift()
console.log(myArray);  // removes one value from the start of the array

console.log(myArray.includes(5));   //boolean op
console.log(myArray.indexOf(18));

const anotherArray = myArray.join()  // merges the values and converts to string

console.log(myArray);
console.log(anotherArray);

//slice, splice

const myn1 = myArray.slice(1, 4)
console.log("A", myArray);
console.log(myn1);           // only prints the values except for the one sliced.

const myn2 = myArray.splice(1, 4)
console.log("B", myArray);
console.log(myn2);           // deletes the values from the original array and gives op

