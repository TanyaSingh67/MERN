let file=require("fs");
//fs is file system module in node js
//fs module is used to work with files
//we can create, read, update, delete files using fs module

//there are two types of fs modules
//1. fs module with callback functions
//2. fs module with promises
let filetxt=file.writeFileSync("first.txt","this is my first file created by using synchronous write file method");
let filetxtAsyn=file.writeFile("firstasync.txt","this is my first file created by using asynchronous write file method",(err)=>{
    console.log("file created");})