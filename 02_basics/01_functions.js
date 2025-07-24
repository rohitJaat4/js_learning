// function myfunction (){
//     console.log("c");
//     console.log("h");
//     console.log("a");
//     console.log("u");
//     console.log("d");
//     console.log("h");
//     console.log("a");
//     console.log("r");
//     console.log("y");
    
// }
//  referance and execution
// myfunction()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
//}


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("rohit");
    
// after return nothing prints
}


// const result = addTwoNumbers(23,45)
// console.log("Result:", result);

// function loginUserMessage(username="sam"){
//     if(username === undefined){
//         console.log("enter username")
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("rohit")) // if value is not passed it will give undefined

// function calculateCartPrice(...num1){
//     return num1

// }
// console.log(calculateCartPrice(200,300,400,500));



const user = {
    userName: "rohit",
    price : 129

}
function typeScript(anyobject){
    console.log(`userName is ${anyobject.userName} , and price is ${anyobject.price}`)
}
typeScript(user)

typeScript({
    userName: "sam",
    price: 34
})


const myNewArray = [34,45,98,34 ]
function newArray (myArray){
    return myArray[2]

}
console.log(newArray(myNewArray))