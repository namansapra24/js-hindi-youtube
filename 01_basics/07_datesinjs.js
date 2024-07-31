//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreatedDate = new Date(24, 7, 12)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

//TimeStamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);   // +1 as moth starts from 0 in arrays

console.log( newDate.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric',
    month: 'narrow'
}));

