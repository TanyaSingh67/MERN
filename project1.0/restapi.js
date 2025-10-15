//rest api orrestfull api are the apis having server client architecture 
//in general apis , when the client asks the server to get some request the server usually seraches in dataase and give the information to the cilent in html doc fomat
//now this is fine for browser if thye response is in htm doc format---faster
//but cilent can be anythimg other than browser as well like mobile phone, alexa etc, so its nit feasible to get response in html formqt only
//rest apis work on th server cilent architecture where server behaves as a separte entity and cilent behaves as a separate entity
//server sends the response in the key value pair format while the client on receiving this keyvalue pair transform into its favourable tyoe of reponse--slower

//in rest apis both html type and json type responses can be sent
//ssr-server side rendering
//csr-client side rendering
//making query in database


//secondly , the restfull api respects all the http methods
//i.e put,get ,post,delete
//other apis --get /getuser- get
//post /updateuser
//the baove two are unfavourable way of using http methds followed by other apis
//rest api respects http methods and doesn't use any extra name 
//rest apis--get /user
//post /user
//so this was all about rest or restfull api

//now the request so made should be in hybrid mode containg both jsin and html responses
//so that if teh request is made on browser , html response makes it fater

//creating a rest api using node and express
const users=require("./MOCK_DATA.json");
const express=require("express");
const mongo=require("mongoose");
const app= express();
const PORT=8000;
//this is a middleware a kind of plugin used to handle all types of requests
app.use(express.urlencoded({extended:false}))
//app.use(express.json({extended:false})); -->.if the new post request would be in json format we need to use this middleware

 app.use("api/users/:id",(req,res,next)=>{
    console.log("this is the middle ware that will be called after decoding the post request");
    next();
 })

 app.use((req,res,next)=>{
    return req.end(`this is the next middlewarecalled by the previous middle ware and this middle as has no forward middle wate it willconnect to the request funcyion if not terminated`);
    next(); //tgis next() method call the next middle ware
    //but here in this case since we have used req.end() so after this all the request will terminate
 })


app.get("/users",(res,req)=>{
    const html=`
    <html>
    <ul>
   ${usersmap((user)=> <li>${users.first_name}</li>
    )}
    </ul>`;
    req.send(html);
})
//REST API me hmlog http methods to program krenge
app.route("api/users/:id")  //this :id notation denotes the dynamic 
.get((req,res)=> {
    //we need to define id
    const id=Number(req.params.id);
const user=users.find((user)=> user.id===id)
return res.json(users);
}).post(()=>{
   const body=req.body;
   if(!users){
    req.status(404).end(`this data isnot avaiable`);
   }
   if(!body || !body.email || !body.first_name|| !body.last_name || !body.ip_address || !body.gender){
    req.status(400).end(`this data isnot avaiable`);
   }
   console.log(body);
   req.status(201).end(`data has been succesfully created`)

}).patch(()=>{
 console.log( `status pending`)
})
.delete(()=>{
   console.log( `status pending`) 
}).put(()=>{
    console.log( `status pending`)
});
app.listen(PORT, ()=>{`server started`})

// in case of post,patch,put,delete we cannot do it from browser
//for this we will use postman
//basically postman is a utility software