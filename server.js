//here we will create a live server
//using http module in directory server.js
let http=require("http");
//this server has two types of parameters --req and res
let myserver=http.createServer((req,res)=>{
    //this block of function will cintain request and response
    console.log("server created");
    res.end("this is my first server");
})

//now we will make this server to listen on a particular port
myserver.listen(3000,()=>{
    console.log("server is listening on port 3000"); //every server has unquie port number
    //port number can be any number between 0 to 65535
});

//now we will run this file using node server.js command in terminal
//after running this file we will go to browser and type localhost:3000
//we will see the output of this server in browser
//we can also use postman to test this server   
