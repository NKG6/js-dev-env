import express from 'express';
import path from 'path';
import open from'open';
import compression from 'compression'
/* eslint-disable no-console*/
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get("/", function(req , res){

res.sendFile(path.join(__dirname,'../dist/index.html'))

});

app.get("/users", function(req,res){
res.json([
  {"id":1,"firstName":"Naresh" ,"lastName":"Kumar","email":"nareshkumar@gmail.com" },
  {"id":2,"firstName":"Sathwik" ,"lastName":"Gubba","email":"sathwik@gmail.com" },
  {"id":3,"firstName":"vijay" ,"lastName":"K","email":"vijayk@gmail.com" },
  {"id":4,"firstName":"chandu" ,"lastName":"Goud","email":"chandugoud@gmail.com" }
]);
});

/* eslint-disable no-console */
app.listen(port, function(err){
  if(err){
    console.log(err);
  }
  else{
    open('http://localhost:'+ port);
    console.log('AppStarted at http://localhost:'+ port )
  }
});


