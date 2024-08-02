const faccebook = {}

faccebook.id = "123abc"
faccebook.name = "Ramu"
faccebook.isLoggedIn = false

console.log(faccebook);

const regUser = {
    userId: "123123",
    name: {
        firstname: "Naman",
        lastname: "Sapra",
        othername: {
            nickname: "Namo"
        }
    }
}

console.log(regUser);
console.log(regUser.name);
console.log(regUser.name.othername.nickname); //to search value within value, nested value

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

obj3= {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log("obj4=", obj4);
const obj5 = Object.assign({}, obj1, obj2)  //first obj is source rest are target
console.log("obj5=", obj5);

const obj6 = {...obj1, ...obj2}
console.log("obj6=", obj6);

const users = [
    {
        id: 1,
        email: "ab@ab.com"
    },
    {
        id: 2,
        email: "cd@cd.com"
    },
    {
        id: 3,
        email: "ac@ac.com"
    }
]

console.log(users[2].id);   //merge of array and object methods

console.log(Object.keys(faccebook));  //gives only the key names
console.log(Object.values(faccebook));  // gives only values
console.log(Object.entries(faccebook));  // gives merged keys and values in seperate arrays
console.log(faccebook.hasOwnProperty("email"));
console.log(faccebook.hasOwnProperty("name"));

const course = {
    coursename: "Java",
    courseprice: "999",
    courseinstructor: "Hitesh"
}
//console.log(courseinstructor); // cannot call as need to define object key first
console.log(course.courseinstructor);
const {courseinstructor: c} = course  // way of destructuring, c is now used for courseinstructor
//console.log(courseinstructor);
console.log(c);


