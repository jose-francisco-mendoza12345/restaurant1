var express = require('express');  
var router = express.Router(); 
var ORDEN = require("../database/orden");

router.get("/orden", function(req, res, next) {
ORDEN.find({},(error,docs) => {
res.status(200).json(docs);
}); 
}); 
router.post("/orden", (req, res) => { 
  var datos = req.body;
  var typeenvio = datos.envio.split(","); 
  var orden= {};
  orden["idmenu"] = datos.idmenu;
  orden["idrestaurant"] = datos.idrestaurant;
  orden["cantidad"] = datos.cantidad;
  orden["idcliente"] = datos.idcliente;
  orden["lugardeenvio"] = datos.lugardeenvio;
  var neworden = new ORDEN(orden);
  neworden.save().then(() => {
    res.status(200).json({"msn": "orden registrada"});
  });  
});
 module.exports = router;  
 