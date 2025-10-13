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
        res.end("Welcome to the homepage!"); //res.end thing will be printed on the main server.
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