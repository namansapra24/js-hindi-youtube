const coding = ['Java', 'Cpp', 'Python', 'Ruby', 'JS']

coding.forEach((val) => {        //coding.forEach(function(val) {console.log})
    console.log(val);            //other way
})

function printMe(item) {
    console.log(item);
} 

coding.forEach(printMe)       // other way, declare fn first and then give reference 
                              // in forEach
coding.forEach((item, index, array)=> {
    console.log(item, index, array);
})                              


const myCoding = [
    {
        langName: "Javascript",
        langFile: "JS"
    },
    {
        langName: "Python",
        langFile: "Py"
    },
    {
        langName: "C Compiler",
        langFile: "Cpp"
    }
]

myCoding.forEach((val)=>{
    console.log("File name:-", val.langFile);   // to access values within objects
    console.log("Language name :-",val.langName);
    
})




