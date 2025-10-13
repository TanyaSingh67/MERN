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


