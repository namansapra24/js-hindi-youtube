// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("Reached 5");
    }
   // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} an outer loop ${i}`);
        //console.log(i, '*' , j , '=' , i*j);
        
    }
    
}




for (let i = 0; i <= 10; i++) {
    //console.log(`Table for ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(i, '*', j, '=', i*j);
        
        
    }
    
}


let myArray = ["Flash", "Superman", "Batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        break
    }
    console.log(`Value is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        continue                       // will continue the for loop
    }
    console.log(`Value is ${index}`);
}