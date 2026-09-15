// var myLogModul = require("./log");
// myLogModul.info("node.js comecou");

// var myLogModul = require("./log");
// myLogModul.warning("aviso sobre node.js");

// var myLogModul = require("./log");
// myLogModul.error("ERRO!");

var msg = require("./message");
console.log(msg);

var person = require("./data");
console.log(person.firstname + " " + person.lastname);
//------------------------------------------------------------------
var msg = require("./log");
console.log("msg");
//=/=
var msg = require("./log");
console.log("ola mundo");
//---------------------------------------------------------
var msg = require("./log");
msg("adeus mundo");
//---------------------------------------------------------
var person = require("./person");
var person1 = new person("ban", "ana");
console.log(person1.fullname());
