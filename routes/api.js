
const express=require('express')
const router=express.Router();

router.get('/ninjas',function(req,res){

	res.send({type:'Get'});
});

router.post('/submit',function(req,res){
//console.log(req.body);


//var sql = "INSERT INTO stud VALUES (null,'"+req.body.named+"','"+req.body.add+"')";
  
  
  /*con.query(sql, function (err, rows,fields) {
    if (err) {

    	console.log("err in q");
    }else{

      
    res.render('index',{title: 'Data saved', 
message: 'Data saved'})
		}  
  });*/
//con.end();

res.send({named:req.body.named,add:req.body.add});
});


router.post('/ninjas',function(req,res){

	res.send({type:'Post'});
});

router.put('/ninjas/:id',function(req,res){

	res.send({type:'put'});
});

router.delete('/ninjas/:id',function(req,res){

	res.send({type:'delete'});
});

module.exports=router;