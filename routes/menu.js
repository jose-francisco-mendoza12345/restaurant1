var express = require('express');  
var router = express.Router(); 
var MENU = require("../database/menu");

router.get("/menu", function(req, res, next) {
MENU.find({},(error,docs) => {
res.status(200).json(docs);
}); 
}); 
router.post("/menu", (req, res) => { 
  var datos = req.body;
  var typefoto = datos.foto.split(","); 
  var menu = {};
  menu["nombreMenu"] = datos.nombreMenu;
  menu["precio"] = datos.precio;
  menu["descripcion"] = datos.descripcion;
   menu["fechaderegistro"] = datos.fechaderegistro;
  menu["foto"] = datos.foto;
  var newmenu = new MENU (menu);
  newmenu.save().then(() => {
    res.status(200).json({"msn": "selecionar producto"});
  });  
});
module.exports = router;  