var  mongoose=require("mongoose");
mongoose.connect("mongodb://172.21.0.2:27017/restaurantdatabase",{useNewUrlParser:true});
var  db = mongoose.connection;  
db.on("error", () => {
    console.log("error nose puede acceder a la base de datos");

});
db.on("open", () =>{
    console.log("conexion exitosa");
});

module.exports = mongoose;
