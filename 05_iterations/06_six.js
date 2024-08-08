const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map((num)=> {return num+10})      // map fn automatically visits every value
console.log(newNumbers);                             // if scope {} is used then use keyword return

const chainNum = myNumbers
                .map((num)=> num*10)          // multiple fns can be chained like so
                .map((num)=>num+1)
                .filter((num)=> num >=51)
console.log(chainNum);


