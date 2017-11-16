var express = require('express');
var router = express.Router();
/*BASE DE DATOS0*/
var db=require("mysql_orm");
var settings={
    host:"0.0.0.0",
    user:"root",
    password:"simple",
    database:"isabel",
    port:"3306"
}
var query=db.mysql(settings);

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var a={name: "isabel", year:"77", cel:["777777", "625874589"]}
  res.send(a)*/
  query.get("usuario").execute(function(rows){
  	res.send(rows);
  })
  //res.render('index', { title: 'HOLA MUNDO ' });
});


router.post("/crearusuario", function(req, res){
    var name= req.body.name;
	query.save("users", req.body, function(result){
      if(!result){
      	res.send({result:false});
      	return;
      }
      res.send(result);
	});
});
module.exports = router;
