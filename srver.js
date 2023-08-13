

const http = require('http');
const fs =require("fs")
http.createServer=http.createServer((req,res)) => {
res.end("<h1>Hello Node!!!!</h1>\n")
Server.listen(3000);
}

   fs.writeFile("welcome.txt" , "Hello" , (err,data) =>{
      if(err) {
         throw err
      }
      
      console.log("sucess")

   })
   fs.readFile("./welcom.txt" , (err , data)=>{
      if(err)
      throw err
   }
    if(data){
      console.log('data' , toString)
   })
   