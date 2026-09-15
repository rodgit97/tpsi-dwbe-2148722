// a. Crie um array vazio
const functionsArray = [];

// b. Utilizando a função push adicione 3 funções anônimas ao array
functionsArray.push(function () {
  console.log("Hello World 1");
});
functionsArray.push(function () {
  console.log("Hello World 2");
});
functionsArray.push(function () {
  console.log("Hello World 3");
});

// c. Invocar todas as funções utilizando a expressão for
for (let i = 0; i < functionsArray.length; i++) {
  functionsArray[i]();
}

// d. Replicando utilizando a expressão forEach
functionsArray.forEach(function (fn) {
  fn();
});
