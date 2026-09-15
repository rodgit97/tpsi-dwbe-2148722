// {
//     "firstname":"Jon",
//     "lastname":"Jon",
//     "address":{
//     "street":"101 main st",
//     "city":"New York",
//     "state":"NY"
// }

// }

var array = [1, 2, 3, 4];
array.push();
console.log(array);
//----------------------
var age = 30;

console.log("------------------------------------");
function Person(firstName, lastName) {
  this.firstName = "lastName";
  this.lastName = "firstName";
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  //   console.log(fullName);
}
console.log(Person);
console.log(this.firstName);
console.log(this.lastName);

console.log("------------------------------------");

var john = new Person("john", "Doe");
var jade = new Person("john", "Doe");

console.log(john);
console.log("---//---");

console.log(jade);

console.log("------------------------------------");

function Person1(firstName1, lastName1) {
  this.firstName1 = "lastName";
  this.lastName1 = "firstName";
}

Person1.prototype.greet = function () {
  console.log("hello " + this.firstName1 + " " + this.lastName1);
};
var john1 = new Person1("John", "Doe");
john1.greet();
//   console.log(fullName);
var jade1 = new Person1("John", "Doe");
jade1.greet();
console.log("---//---");

console.log(john1._proto_);
console.log(jade1._proto_);
console.log(john1._proto_ == jade1._proto_);

console.log("------------------------------------");

var person2 = {
  firsname2: " ",
  lastname2: " ",
  greet: function () {
    return this.firsname2 + " " + this.lastname2;
  },
};
console.log(person2);

console.log("---//---");

var john2 = Object.create(person2);
john2.firsname2 = "john";
john2.lastname2 = "Doe";

console.log(john2);

console.log("---//---");

var jade2 = Object.create(person2);
jade2.firsname2 = "jade";
jade2.lastname2 = "Doe";

console.log(jade2);

console.log("------------------------------------");

class Person3 {
  constructor(firstName3, lastName3) {
    this.firstName3 = firstName3;
    this.lastName3 = lastName3;
    this.age = 0;
    this.greet = function () {
      return this.firstName3 + " " + this.lastName3;
    };
  }
}
console.log("------------------------------------");

const { log } = require("console");
var Emitter = require("events");
var emtr = new Emitter();

emtr.on("greet", function () {
  console.log("somewhere, someone said hello");
});
console.log(Emitter);
console.log("---//---");

console.log(Emitter.on);
console.log("---//---");

console.log(emtr);
console.log("------------------------------------");
var Emitter = require("./emitter");
var emtr = new Emitter();

emtr.emit("greet");

console.log("------------------------------------");

module.exports = {
  events: {
    GREET: "greet",
    FILESAVED: "filesaved",
    FILEOPENED: "fileopened",
  },
};

var eventConstants = require("./config");
// for (let i = 0; i < array.length; i++) {
//   var element = array[i]();
//   array.forEach(function (e) {
//     var x = e();
//   });
// }
