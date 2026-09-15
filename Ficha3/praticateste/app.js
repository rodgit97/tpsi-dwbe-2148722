// app.js
const ArrayUtils = require("./ArrayUtils");

// Funções para simular o download
function started() {
  console.log("Started Download");
}

function update(progress) {
  console.log(`${progress}% of download`);
}

function completed() {
  console.log("Download Completed");
}

// Função para realizar o download
function performDownload(started, update, completed) {
  started();
  let progress = 0;

  // Simulando o progresso do download
  let interval = setInterval(() => {
    update(progress);
    progress++;

    // Quando o progresso atinge 6%, o download é concluído
    if (progress > 5) {
      clearInterval(interval);
      completed();
    }
  }, 1000);
}

// Chamada da função performDownload
performDownload(started, update, completed);

// Testando o módulo ArrayUtils
console.log("\nTestando funções do ArrayUtils:");
const array = [1, 2, 3, 4, 5];

console.log("isEmpty:", ArrayUtils.isEmpty([])); // true
console.log("isEmpty:", ArrayUtils.isEmpty(array)); // false

console.log("max:", ArrayUtils.max(array)); // 5
console.log("min:", ArrayUtils.min(array)); // 1
console.log("average:", ArrayUtils.average(array)); // 3
console.log("indexOf 3:", ArrayUtils.indexOf(array, 3)); // 2
console.log("subArray (1, 3):", ArrayUtils.subArray(array, 1, 3)); // [2, 3]
console.log("isSameLength:", ArrayUtils.isSameLength([1, 2], [3, 4])); // true
console.log("reverse:", ArrayUtils.reverse(array)); // [5, 4, 3, 2, 1]
console.log("contains 3:", ArrayUtils.contains(array, 3)); // true
console.log("concatenate:", ArrayUtils.concatenate([1, 2], [3, 4])); // [1, 2, 3, 4]
