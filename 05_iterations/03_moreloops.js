// for of

let myArray = [1, 2, 3, 4, 5, 6]

for (const arr of myArray) {     // increments itself, no need to specify
    console.log(arr);
}

let val = "Hi, how are you?"

for (const greet of val) {
    console.log(`Strings are ${greet}`);
}


//Maps

const map = new Map()
map.set('IN', 'India') 
map.set('UK', 'United Kingdom')
map.set('FR', 'France')
map.set('FR', 'France')         // duplicate values will not print

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}



const myObject = {
    'game1': 'GTA',
    'game2': 'NFS'
}

//for (const [key, value] of myObject) {
//    console.log(key, value);              //will not work on such an object
//}

const myObject1 = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject1) {
        console.log(`${key} is short for ${myObject1[key]}`);
            
}







