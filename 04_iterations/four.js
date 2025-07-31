const myobject = {
    js :"javascript",
    rb :"ruby",
    cpp :" c++",
    swift : "swift by Apple"
}
for (const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`)
}

const arr = [ "java", "python", "ruby", "javascript"]
for(const key in arr){
    console.log(arr[key])
}