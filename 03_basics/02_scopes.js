let a = 10             // values defined normally are global scope and available everywhere
const b = 20
// var c = 30          // do not use var as it does not work as a block or global scope

if(true){       // values defined inside are called block scope and can be accessed insde the fn
    let a = 100                 
    const b = 200
    console.log("Inner val", a);
    
}

console.log("Outside val", a);



function one(){
    const username= "Naman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);      will not print n give error as function closed n 
    //                           website is block scope
    two()
}
console.log("Fn one is printed", one());


if(true) {
    const username = "Naman"
    if(true) {
        const website = " naman.com"
        console.log(username + website);
        
    }
    // comsole.log(website)            will not print
}

// console.log(username);              will not print

// +++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++


addOne(5)                      // defining fn in this way we can call fn b4 defining
function addOne(num){
    return num + 1
}


const val = function addTwo(num) {          // cannot be done in this case
    return num + 2
}
val(5)