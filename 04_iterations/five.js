const coding = [":java", "python", "ruby", "javascript"]
coding.forEach(function(val){
    console.log(val);
    

})
coding.forEach((item)=>{
    console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)



coding.forEach((item, index, arr)=>{
   console.log(item,index,arr);
   
})



const myCoding = [
    {
        languageName: "javascript",
        languagefilename:"js"
    },
    {
        languageName: "java",
        languagefilename:"java"
    },
    {
        languageName: "py",
        languagefilename:"python"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})