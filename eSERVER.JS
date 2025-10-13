//let http=require("http")
let express =require("express");
let app=express();
app.get("/", (req,res)=>{
    return res.send("helo this is home page")
})
app.get("/about", (req,res)=>{
    return res.send("helo this is about page" + " hey " + req.query.name)
})
app.listen(5000,()=>{
     console.log("server started")
})

//const myserver=http.createSrver(app);
//myserver.listen(5000,()=>{
   //  console.log("server started")
//})