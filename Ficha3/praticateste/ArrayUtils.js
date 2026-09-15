// ArrayUtils.js

// Função para verificar se um array está vazio
function isEmpty(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input não é um array");
  }
  return array.length === 0;
}

// Função para retornar o valor máximo do array
function max(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Array vazio ou inválido");
  }
  return Math.max(...array);
}

// Função para retornar o valor mínimo do array
function min(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Array vazio ou inválido");
  }
  return Math.min(...array);
}

// Função para calcular a média dos valores do array
function average(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Array vazio ou inválido");
  }
  return array.reduce((sum, val) => sum + val, 0) / array.length;
}

// Função para retornar o índice de um valor no array
function indexOf(array, value) {
  if (!Array.isArray(array)) {
    throw new Error("Input não é um array");
  }
  return array.indexOf(value);
}

// Função para retornar um sub-array entre dois índices
function subArray(array, startIndex, endIndex) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Array vazio ou inválido");
  }
  return array.slice(startIndex, endIndex);
}

// Função para comparar o comprimento de dois arrays
function isSameLength(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) {
    throw new Error("Inputs não são arrays");
  }
  return a1.length === a2.length;
}

// Função para inverter a ordem de um array
function reverse(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input não é um array");
  }
  return array.reverse();
}

// Função para trocar dois elementos de posição
function swap(array, index1, index2) {
  if (!Array.isArray(array)) {
    throw new Error("Input não é um array");
  }
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// Função para verificar se o array contém um valor
function contains(array, value) {
  if (!Array.isArray(array)) {
    throw new Error("Input não é um array");
  }
  return array.includes(value);
}

// Função para concatenar dois arrays
function concatenate(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) {
    throw new Error("Inputs não são arrays");
  }
  return a1.concat(a2);
}

// Exporte as funções como um objeto
module.exports = {
  isEmpty,
  max,
  min,
  average,
  indexOf,
  subArray,
  isSameLength,
  reverse,
  swap,
  contains,
  concatenate,
};
