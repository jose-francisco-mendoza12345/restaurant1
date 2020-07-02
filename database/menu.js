var mongoose =require("./connect");
var MENUSCHEMA = new  mongoose.Schema({
    nombreMenu: String,
    precio: String,
    descripcion: String,
    fechaderegistro: String,
    typefoto: Array
});
var Menu = mongoose.model("menu", MENUSCHEMA)
module.exports = Menu;