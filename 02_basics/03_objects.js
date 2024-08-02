//objects
//Object.create  (also a way to create objects)

mySym = Symbol("key1")
//object literals
const jsUser = {
    name: "Naman",
    age: 24,
    [mySym]: "mykey1",  //symbols need t =o be defined fie=rst and then added in square brackets
    email: "naman@google.com",
    "full name":"Naman Sapra",  //no way to access this through normal method
    isLoggedIn: false,
    lastLogin: ["Monday", "Friday"],
}

console.log(jsUser.email);  //noormal method
console.log(jsUser["email"]);   //another method
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "naman@na.com"
console.log(jsUser.email);

//Object.freeze(jsUser)   // ow will not let the values to be changed
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${jsUser.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting);   // op received however function not executed.


