// function conta(a, b) {
//   return a, b;
// }
// log(conta);
//------------------------------------
// function test{
// this.x = 0;
// }
// var z = test.z
//------------------------------------
// function factorial(number) {
//   var fact = 1;
//   for (i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// function main() {
//   var notaP1 = 15;
//   var notaP2 = 12;
//   var notaPF = 10;
//   var notaF = notaFinal(notaP1, notaP2, notaPF);
//   console.log("Nota final:" + notaF);

//   var f = factorial(5);
//   console.log("Factorial:" + f);

//   var numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//   var avg = average(numbers);
//   console.log("Average: " + avg);
// }

//------------------------------------

function hello() {
  console.log("ola");
}
function log(fn) {
  fn();
}
log(hello);
//------------------------------------
var greetMe = function () {
  console.log("boa noite");
};
greetMe();
log(greetMe);
//------------------------------------

// function ptth() {
//   var http = require("http");
//   var server = http.createServer(function (req, res) {});
//   server.listen(5000);
// }
// log(ptth);
//------------------------------------

// var ptth = function () {
//   var http = require("http");
//   var server = http.createServer(function (req, res) {});
//   server.listen(5000);
// };
// ptth();
// log(ptth);
//------------------------------------
