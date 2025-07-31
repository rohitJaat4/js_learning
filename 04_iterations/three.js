// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num  of arr) {
    console.log(num);
    
    
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(greet);
    
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', "united states of America")
map.set('IN', "India")

for (const [key, value] of map){
    console.log(key, ':-', value);  // map is not iterable
    
}
const myObject = {
    "game1": "NFS",
    "game2": "spiderMan"
}

for(const[key , value] of myObject){
    console.log(key, ':-', value);
}

