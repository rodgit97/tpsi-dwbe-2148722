var nome = "peter";
var contador = 5;
var hasEnded = false;
var value = null;
var undef;

console.log(nome);
console.log(contador);
console.log(hasEnded);
console.log(value);
console.log(undef);

//---------------------------------------------
console.log("---------------------------------");

var cars = ["saab", "volvo", "bmw"];
var date = Date();
var person = { firstName: "john", lastName: "doe", age: 50, eyeColor: "blue" };

console.log(cars);
console.log(date);
console.log(person);

//---------------------------------------------
console.log("---------------------------------");

var str = "Hello " + "World " + "from " + "tutorialTeacher ";
var str2 = "hello world";

console.log(str);
console.log(str2);

console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
console.log(str2[3]);
console.log(str2[4]);
//---------------------------------------------

// var str3 = "hello world";
// // console.log();
// charAt(str3);

//---------------------------------------------
console.log("---------------------------------");

var int = 100;
var float = 100.5;
var hex = 0xfff;
var exponential = 2.56e3;
var octal = 30;

console.log(int);
console.log(float);
console.log(hex);
console.log(exponential);
console.log(octal);

//---------------------------------------------
console.log("---------------------------------");

var num1 = 100;
console.log(num1.toExponential(2));

console.log("---//---");

var num2 = 100;
console.log(num2.toFixed(2));

console.log("---//---");

var num3 = 100;
console.log(num3.toLocaleString());

console.log("---//---");

var num4 = 100;
console.log(num4.toPrecision(4));

console.log("---//---");

var num5 = 100;
console.log(num5.toString());

console.log("---//---");

var num6 = 100;
console.log(num6.valueOf());

//---------------------------------------------
console.log("---------------------------------");

// var myVar = null;

// if (myVar) alert("variavel não é nulo");
// else alert("variavel é nulo");

// var saveButton = document.getElementById("save");
// if (saveButton !== null) saveButton.onsubmit();

//---------------------------------------------
console.log("---------------------------------");

function Sum(valor1, valor2) {
  var resultado = valor1 + valor2;
}
var resultado = Sum(5, 5);
// alert(resultado);
console.log(resultado);
console.log(Sum);

//---------------------------------------------
// console.log("---------------------------------");
// function Sum(valor3, valor4) {
//   return valor3 + valor4;
// }
// // Sum(5);
// // console.log(Sum);

//---------------------------------------------
console.log("---------------------------------");

var stringArray = ["one", "two", "three"];
var numericArray = [1, 2, 3, 4];
var decimalArray = [1.1, 1.2, 1.3];
var booleanArray = [true, false, false, true];
var mixedArray = [1, "two", "three", 4, true];

console.log(stringArray);
console.log(numericArray);
console.log(decimalArray);
console.log(booleanArray);
console.log(mixedArray);

//---------------------------------------------
console.log("---------------------------------");

// Concat()
//---------------------------------------------
console.log("---------------------------------");
var dt = new Date();
// var dt2 = new Date(milliseconds);
// var dt3 = new Date("date string");
// var dt4 = new Date(year, month[(date, hour, minute, second, millisecond)]);

console.log(dt);
// console.log(dt2);
// console.log(dt3);
// console.log(dt4);

//---------------------------------------------
console.log("---------------------------------");

var emptyObject = {};

console.log(emptyObject);
//---------------------------------------------
console.log("---------------------------------");
var person1 = { firstName: "joao" };

console.log(person1);

//---------------------------------------------
console.log("---------------------------------");
var person2 = {
  firstName: "james",
  lastName: "bond",
  age: 15,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person2);

//---------------------------------------------
console.log("---------------------------------");
person2.firstName;
person2.lastName;

person2["firstName"];
person2["lastName"];

person2.getFullName();

console.log(person2);

//---------------------------------------------
console.log("---------------------------------");

var person3 = new Object();

person3.firstName = "afonso";
person3["lastName"] = "henriques";
person3.age = 25;
person3.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person3);

// person3.firstName;
// person3.lastName;
// person3.getFullName;
//---------------------------------------------
console.log("---------------------------------");

// typeof 37 === 'number';
//---------------------------------------------
console.log("---------------------------------");
var x = 5,
  y = 10,
  z = 15;

// x + y;
// y - x;
console.log(x + y);
console.log(x - y);
console.log(z + x);
console.log(z * x);
console.log(x, y, z);
console.log(y * x);
console.log(y % x);

//---------------------------------------------
console.log("---------------------------------");

var a = 5,
  b = 10,
  c = "5";
var x = a;

console.log(a == c);
console.log(a === c);
console.log(a != b);
//---------------------------------------------
console.log("---------------------------------");
var d = 5,
  e = 10;

console.log(a != b && a < b);
console.log(a > b || a == b);
//---------------------------------------------
console.log("---------------------------------");
var f = 5,
  g = 10,
  h = 15;

console.log((x = y));
console.log((x += 1));
console.log((x -= 1));

console.log((x /= 2));
console.log((x %= 3));
//---------------------------------------------
console.log("---------------------------------");
var i = 10,
  j = 5;

var k = i > j ? i : j;
var l = i > j ? j : a;

console.log(k);
console.log(l);
//---------------------------------------------
console.log("---------------------------------");
// function conditions(i, j, res) {
//   res = 0;
//   if (i < j) {
//     return res;
//   } else if (i > j) {
//     return res;
//   } else {
//     return "nehum deles e maior ou menor";
//   }
// }
// console.log(conditions);
//não está certo
//---------------------------------------------
console.log("---------------------------------");
function loop(i) {
  var i = 0;
  while (i != 10) {
    return i;
  }
  i++;
}
console.log(i);
console.log(loop(i));

//---------------------------------------------
console.log("---------------------------------");
function loop1(j) {
  for (var i = 0; j != 10; j++) {
    return j;
  }
}
console.log(j);
console.log(loop1(j));

//---------------------------------------------
console.log("---------------------------------");



//---------------------------------------------
console.log("---------------------------------");
