//2
//a
var obj = {
  name: "Ana",
  age: 24,
  gender: "feminino",
};
//b
var person = JSON.stringify(obj);
console.log(person);

var stringify = '{ "name": "Ana","age": "24","gender": "feminino"}';

var json_obj = JSON.parse(stringify);
console.log(json_obj);

console.log(json_obj.name);
console.log(json_obj.age);
console.log(json_obj.gender);
