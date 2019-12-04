
const express=require('express')
var bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());//postman reads as empty set if not used
app.use(bodyParser.urlencoded({ extended: true }));//postman reads as empty set if not used

app.use('/api',require('./routes/api'));

app.listen(process.env.port || 4000,function(req,res){

	console.log("now listening for requests");
});