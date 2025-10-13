//here we will deal with urls 
const http=require("http");
const file=require("fs");
const url=require("url");
const myserver=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true); 
    let files=file.writeFile("url.txt",``) //here req.urlmeans the url of the request
switch(myUrl.pathname){ //here we will be dealin with the entire path of the url including query parameters and not just domain and protocol
    case "/":
        // handle root path
        if(req.method==="GET"){
res.end("Welcome to the homepage!");
        }
         //res.end thing will be printed on the main server.
        break;
 case "/about":
    res.end(`${username}`)  
    break;
     default:
        res.statusCode = 404;
        res.end("Not Found");
        break;
}
});
myserver.listen(3000, (err,data)=>{
    console.log("here we started our server") //this thing will be printd on the terminal of the vs code
})


//HTTP methods
//there are 5 types of methods in http
//get--any request we make on the server is a get request . get request is searched in the database of the server
//post--anything we post like signup/signin these are the things in whuch add something to our database
//put--uploading any file, putting any picture etc...where we put something on our webade 
//patch--upadting,editing comes under patch
//delete

//to perform thse methods manually in nodejs is a task of making code lengthy
//so we use a framework for this called aas express