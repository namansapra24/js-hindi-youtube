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


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(18, 27, 36, 45))


const user = {
    username: "Naman",
    email: "na@na.com"
}

function handleObject(anyObject){
console.log(`The username is ${anyObject.username} and email is ${anyObject.email}`);

}

// handleObject(user)

handleObject({                 // can also pass objects directly
    username: "Rahul",
    email:"na@123.com"
})


const newArray = [100, 200, 300, 400]

function returnSecondValue(anArray){
    return anArray[1]
}

//console.log(returnSecondValue(newArray))

console.log(returnSecondValue([18, 74, 85, 55]));  // cqn also pass array directly



