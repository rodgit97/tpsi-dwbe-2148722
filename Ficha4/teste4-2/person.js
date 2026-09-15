// a. Crie um objeto/classe Person usando a sintaxe da função construtor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// b. Adicione duas propriedades ao objeto
Person.prototype.firstName = "";
Person.prototype.lastName = "";

// c. Utilizando herança prototipada, adicione um novo método greet
Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName} ${this.lastName}`);
};

// d. Crie duas instâncias do objeto Person com nomes diferentes
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

// e. Utilizando herança prototipada, adicione uma nova propriedade age
Person.prototype.age = 0;

// f. É possível acessar/alterar essa propriedade?
person1.age = 25; // Acessando e alterando a propriedade age
console.log(person1.age); // 25

// g. Alterar o método greet para utilizar a idade
Person.prototype.greet = function () {
  console.log(
    `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old`
  );
};

// h. Imprima para a consola a propriedade __proto__, qual o seu conteúdo?
console.log(person1.__proto__); // Exibe o protótipo da instância person1

// i. Compare a propriedade __proto__ das duas instâncias
console.log(person1.__proto__ === person2.__proto__); // true, ambas compartilham o mesmo protótipo
