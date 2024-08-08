const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNumbers.reduce((acc, currVal) => {
    //console.log(`acc value is ${acc} and corrent value is ${currVal} `);
    return acc + currVal
}, 0)                               //0 is to let acc know from where to start
//console.log(myTotal);


const shoppingCart = [
    {
        item: "Shoes",
        price: 200,
    },
    {
        item: "Shirt",
        price: 800,
    },
    {
        item: "Jeans",
        price: 900,
    }
]

const newTotal = shoppingCart.reduce((acc, currval) => acc + currval.price, 0)
console.log(newTotal);
