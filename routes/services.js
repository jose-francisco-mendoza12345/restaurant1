var express = require('express');  
var router = express.Router(); 
var USER = require("../database/user");
router.get("/usuario", function(req, res, next) {
USER.find({},(error,docs) => {
res.status(200).json(docs);
}); 
}); 
router.post("/usuario", (req, res) => { 
  var datos = req.body;
  var typelugar = datos.lugar.split(","); 
  var user = {};
  user["name"] = datos.name;
  user["NIT"] = datos.NIT;
  user["propetario"] = datos.propetario;
  user["calle"] = datos.calle;
  user["lugar"] = datos.lugar;
  var newuser = new USER (user);
  newuser.save().then(() => {
    res.status(200).json({"msn": "Usuario registrado"});
  });  
});
 module.exports = router;  
 