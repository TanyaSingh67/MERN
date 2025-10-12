//here we will create a live server
//using http module in directory server.js
const http=require("http");
const file=require("fs");
//this server has two types of parameters --req and res
const myserver=http.createServer((req,res)=>{
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


//now we will also use the concept of file handling in this server
const filehandling = http.createServer((req, res) => {
    const log = `request made at ${new Date()},${req.url}\n`; //this log will be added to the file and will keep the track of requests made to the server
    file.appendFile("lod.txt", log, (err, data) => {  //make sure to keep this non blocking code so that other requests are not blocked
        //always use async methods
        //avoid using code for imageprocessing,etc to avoid blockage of other requests
  
        if (err) {
            console.log(err);
            res.end("Error writing to log file");
        } else {
            console.log("log file created");
            res.end("log file created");
        }
    });
});

filehandling.listen(4000, () => 
{
    console.log("server is listening on port 4000");
}
);

//let us create multiple pages wala web server

//here comes the copopncept of url==unifrom resource loactor
//url has 3 sections-protocol(https-hypertext transfer protocol secure),domain name(google.com),path(/search)
//there are severl type of paths-- normal path having only one /, nested path having multiple /, dynamic path having parameters in the path
//query parameters-- after / we will have some query followed by question mark
//eg: https://www.bing.com/search?q=disney+pribcess&form=WSBEDG&qs=SW&cvid=f18a0cc0942c48f6b40c308f4dd8f34e&pq=disney+pribcess&cc=IN&setlang=en-US&nclid=22B283E553D41F20AC7A735B01EC7BB5&ts=1760279423734&nclidts=1760279423&tsms=734&PC=WSBQUF
const multipageserver = http.createServer((req, res) => {
    console.log("request made");
    //res.end("this is my first server");
    //we will create multiple pages for this server
    if (req.url == "/") {   
        res.end("this is home page");
    } else if (req.url == "/about") {
        res.end("this is about page");
    } else if (req.url == "/contact") {
        res.end("this is contact page");
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end("<h1>404 error page not found</h1>");
    }
});

multipageserver.listen(8000, () => {
    console.log("server is listening on port 8000");
});

//workin with URLs
//to instal url package 
//typr npm install url and then press enter
//
