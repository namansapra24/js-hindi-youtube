// const coding = ['Java', 'Cpp', 'Python', 'Ruby', 'JS']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);        // forEach does not return values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=> num>=5)
console.log(newNums);

const newNums1 = myNums.filter((num)=> {
    return num >=5                       // since scope is used, values will have to be returned 
})
console.log(newNums1);


const newNums2 = []
myNums.forEach((num)=> {
        if (num > 4) {
            newNums2.push(num)             // using forEach fn/loop
        } 
})
console.log(newNums2);


const books = [
    {title: 'Book1', genre: 'Sci-Fi', publish: 1997, edition: 2001},
    {title: 'Book2', genre: 'History', publish: 1998, edition: 2000},
    {title: 'Book3', genre: 'Non-Fiction', publish: 1989, edition: 1998},
    {title: 'Book4', genre: 'Sci-Fi', publish: 2000, edition: 2009},
    {title: 'Book5', genre: 'History', publish: 2003, edition: 2010},
    {title: 'Book6', genre: 'Non-Fiction', publish: 1997, edition: 2008},
    {title: 'Book7', genre: 'History', publish: 2005, edition: 2014},
    {title: 'Book8', genre: 'Sci-Fi', publish: 1999, edition: 2011},
    {title: 'Book9', genre: 'History', publish: 2001, edition: 2009},
    {title: 'Book10', genre: 'Sci-Fi', publish: 2008, edition: 2019},
]

const histBooks = books.filter((bk)=> bk.genre === "History" )
console.log(histBooks);

const pub2k = books.filter((bk)=> bk.publish >= 2000 && bk.genre == "History")
console.log("Second output ", pub2k);



