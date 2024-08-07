(function one() {
    //named IIFE
    console.log(`DB CONNECTED`);

})();

// IIFE - immediately invoked function execution - formula - simply add ()() around the fn

// REMEMBER TO ADD SEMICOLAN ; AFTER IIFE USE

( () => {
    console.log(`DB TWO CONNECTED`);
    
}) ();

( (Name) => {
    console.log(`Name = ${Name}`);
    
})("Raju")



