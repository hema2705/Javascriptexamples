//Synchronousfilereading.js
const filereading = require("fs")

console.log("line 1")

// in between we shall write the reading of the file 

let filedata = filereading.readFileSync("file1.txt")
console.log("File Reading:"+ filedata.toString())

console.log("line 2")

// the result of above program is 
//line 1
//File Reading:this is file 1
//line 2