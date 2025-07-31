// for loops

for (let i= 0; i<=10; i++){
    const element = i
    if(element == 5){
        console.log("5 is the best number")
    }
    console.log(element)
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for(let i = 0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element);
    
}


// break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`element detected 5`)
        break
        // continue
    }
    console.log(`value of i is ${index}`);
    
}