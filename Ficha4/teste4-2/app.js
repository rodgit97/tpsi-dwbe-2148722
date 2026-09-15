// a. Crie um objeto da forma literal com as propriedades name, age, gender e converta o objeto para JSON utilizando a função JSON.stringify
const person = {
  name: "rodrigo",
  age: 27,
  gender: "male",
};

// Convertendo o objeto para JSON
const personJSON = JSON.stringify(person);
console.log(personJSON); // {"name":"John","age":30,"gender":"male"}

// b. Crie uma string manualmente no formato JSON que represente o objeto e converta para um objeto utilizando JSON.parse
const personString = '{"name":"John","age":30,"gender":"male"}';
const parsedPerson = JSON.parse(personString);
console.log(parsedPerson); // { name: 'John', age: 30, gender: 'male' }

console.log("-------------------------------");

// Importando o objeto events do módulo config.js
const events = require("./config.js");

// Usando as propriedades constantes de events
console.log(events.event1); // Click
console.log(events.event2); // Submit
console.log(events.event3); // Hover
