const myNumbers = [1, 2, 3, 4, 5, 6]
// const newNum = myNumbers.map((num)=> num +10)
// console.log(newNums);

// it can be done with forEach


 const newNums = myNumbers
            .map((num)=>num *10)
            .map((num)=>num +1)
            .filter((num)=>num>=40)

console.log(newNums);
