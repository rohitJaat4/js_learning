//singleton using constructor
//object literal
//object.create
const sym = Symbol('secret');
const jsUser = {
  [sym]: 'hidden value',
  visible: 'public value'
};

// console.log(Object.keys(obj)); // ["visible"]
// console.log(obj[sym]);        // "hidden value"

//console.log(jsUser.gmail);
//console.log(jsUser["gmail"]);
//console.log(jsUser[mySym])

//jsUser.gmail = "hello@gmail.com"
//Object.freeze(jsUser)
//jsUser.gmail = "bye@gmail.com"
//console.log(jsUser)
//console.log(typeof [mySym])

jsUser.greeting = function(){
   console.log("hello brother");
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function () {
    console.log(`hello JS user, ${this.visible}`)
}
console.log(jsUser.greetingTwo());


console.log("Hello");
