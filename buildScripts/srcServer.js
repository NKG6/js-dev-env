import express from 'express';
import path from 'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get("/", function(req , res){

res.sendFile(path.join(__dirname,'../src/index.html'))

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


