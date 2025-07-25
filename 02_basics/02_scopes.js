let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER:", a);
    
}
console.log(a)


function one(){
    const username= "rohit"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
one()

if (true){
    const username = "chaudhary"
    if (username ==="chaudhary"){
        const website = "youtube"
        console.log(username + website);

        
    } 
    // console.log(website)
}


function addone (num){
    return num+1
}
addone(5)

const addtwo = function (num){
    return num+2
}
addtwo(5)

