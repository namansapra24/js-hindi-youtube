function myName(){
    console.log("N");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");   
}
//myName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(1, 2)


function addition(first, second){
    let result = first + second
    return result
    console.log("Naman");  //will not print as function will not work after returning value
}

const result = addition(1, 2)
console.log("Result:", result);

function plus(a, b){
    return a + b
    
}

console.log(plus(10, 20))


function loginMessage(username){
    //if(username === undefined){
    if(!username){
        console.log("Please enter username");
        return
    }
    console.log(`${username} logged in.`);
    
}
loginMessage("Naman")



