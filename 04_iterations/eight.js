const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(accumulator , currentValue){
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    
//     return accumulator + currentValue
// },0)



// .reduce in array function
// const myTotal = myNums.reduce((acc , currvalue) => acc+currvalue,0)


// console.log(myTotal);



const shoppingCart = [
    {
    itemName: "js course",
    price: 2999
    },
    {
    itemName: "java course",
    price: 2777
    },
    {
    itemName: "python",
    price: 5999
    },
    {
    itemName: "ruby",
    price: 1999
    },
    
]

const pricePay = shoppingCart.reduce((acc, item)=>acc + item.price,0)
console.log(pricePay);
