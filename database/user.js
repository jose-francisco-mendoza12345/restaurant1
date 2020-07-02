var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({ 
/*
    nick: {
    type: String,
    required: [true,"el nick name es neceario"]
},
email:{
    type: String,
     required: [true, "el email es necesario"],
     validate:{
         validator: (values)=>{
             /[\W\.]+@/.test(value);
         }
     }, 
     message: props => '${props.value} no ee valido' 
},
password:{
     type: String,
     required: [true, "el password es necesario"],
     min:  [6, "el minimo es 6 caracteres"],

},
*/
name: String,
NIT: String,
Propetario: String,
calle: String,
typelugar: Array
});
var USER= mongoose.model("user", USERSCHEMA)
module.exports = USER;
