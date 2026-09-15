function calcularNotaFinal(notaTeorica, notaPratica) {
  let notaFinal = (notaTeorica + notaPratica) / 2;
  if (notaFinal >= 9.5) {
    console.log(`Nota final: ${notaFinal.toFixed(2)} - Aprovado`);
  } else {
    console.log(`Nota final: ${notaFinal.toFixed(2)} - Reprovado`);
  }
}
console.log("---------------------------------");

function nomeDoMes(mes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outobro",
    "novembro",
    "dezembro",
  ];
  if (mes >= 1 && mes <= 12) {
    console.log(meses[mes - 1]);
  } else {
    console.log("mes inexistente");
  }
}

console.log("---------------------------------");

function calcularOperação(num1, num2, operador) {
  let resultado;
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        console.log("erro: divisao por zero");
        return;
      }
      break;
    case "^":
      resultado = Math.pow(num1, num2);
      break;

    default:
      console.log("operador nao valido");
      return;
  }
  console.log(`Resultado: ${resultado}`);
}

console.log("---------------------------------");
function multiplosDe5() {
  for (let i = 5; i < 20; i += 5) {
    console.log(i);
  }
}

console.log("---------------------------------");

function somaPrimeiros100() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  console.log(`soma dos primeiros 100 numeros inteiros: ${soma}`);
}

console.log("---------------------------------");
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    
  }
}
