const user = {
    username: "Naman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);                     returns entire context
        
    }
}
user.welcomeMessage()
user.username = "Rahul"
user.welcomeMessage()
//console.log(this);                       return empty object

//++++++++++++++Arrow fn +++++++++++++++++++

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4, 5));

const add = (a, b) => (a + b)        // IMPORTANT FOR REACT
console.log(add(4, 4));

const user1 = () => ({username: "Naman"})  //backets important for objects
console.log(user1());



