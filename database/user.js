var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({
name: String,
NIT: String,
Propetario: String,
calle: String,
typelugar: Array
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;
