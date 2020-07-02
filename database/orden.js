var mongoose =require("./connect");
var ORDENSCHEMA = new  mongoose.Schema({

    idMenu: String,
    idrestaurant: String,
    cantidad: String,
    idcliente: String,
    envio: Array
});
var Orden = mongoose.model("orden", ORDENSCHEMA)
module.exports = Orden;