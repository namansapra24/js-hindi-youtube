// if

if (3 != 2) {
    console.log('executed');
}

const temperature = 46
if (temperature === 46) {
    console.log("Temp is 46");
} else {
    console.log("Temp is not 45");
}

const balance = 1000
if (balance >= 500) console.log("Balance is Ok");   //implicit scope  system assumes scope is present
  

if (balance < 500) {
    console.log('less than 500');
} else if (balance < 800) {
    console.log('less thn 800');
} else {console.log('more than 800')
}

let user = true
let card = true
if (user && card && 2==2) {                      //    && means AND
    console.log("Allowed to proceed");
}

const loggedFromGoogle = false
const loggedFromEmail = true

if (loggedFromEmail || loggedFromGoogle) {      //    || means OR
    console.log("User logged in successfully");
}




