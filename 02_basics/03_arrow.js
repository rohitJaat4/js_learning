const user = {
    username:"rohit123",
    price : 8474 ,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`)  // this context is only applicable only on objects
    }
}

user.welcomeMessage()

user.username = "samm"
user.welcomeMessage()


function chai (){
    // let usernamee = "Rohit"
    console.log(this)

}
chai()

const chai = function(){
    let username = "hitesh"
    console.log(this.username)
}
const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}
chai()

const user = (num1, num2)=>{ //basic arrow
    return num1+num2
}


// implicit return
const user = (num1, num2)=> (num1+num2) 
console.log(user(45,49));


const user = (num1, num2)=> ({username:"Rohit"}) 

console.log(user(45,49));
