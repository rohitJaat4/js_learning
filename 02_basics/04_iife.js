// Immediately Invoked Function Expressions (IIFE)
//name iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// unnamed iife
( (user)=>{
    console.log(`DB CONNECTED AGAIN ${user}`)
})("rohit") // this () is for execution