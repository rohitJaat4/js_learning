const userEmail = []
// if(userEmail){
//     console.log("got userEmail")
// } else {
//     console.log("don't got user email");
    
// }

// falsy values = 0, -0, false, BigInt 0n, "", null , undefined, NaN
// truthy values  = "0", "false", " ", {},[],function(){}


// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }
const emptyobject  ={}
if (Object.keys(emptyobject).length  === 0){
    console.log("object is empty")
}


// nullish coalescing operator (??)  null, undefined

let val1;
// val1 = 5 ?? 34
// val1 = null ?? 20
val1 = undefined ?? 14

console.log(val1)

// terniary operator
// condition true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ?  console.log("less than 80"): console.log("more than 100");
 