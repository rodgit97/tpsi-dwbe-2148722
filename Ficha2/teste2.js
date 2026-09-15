// function calcularIMC(peso, altura) {
//     // Calculando o IMC
//     const imc = peso / (altura * altura);

//     // Exibindo o IMC
//     console.log("IMC: " + imc.toFixed(2));

//     // Condição física com base no IMC
//     if (imc < 18.5) {
//         console.log("Condição física: Abaixo do peso");
//     } else if (imc >= 18.5 && imc < 25) {
//         console.log("Condição física: Peso normal");
//     } else if (imc >= 25 && imc < 30) {
//         console.log("Condição física: Acima do peso");
//     } else {
//         console.log("Condição física: Obeso");
//     }
// }

// // Exemplo de uso da função
// const peso = parseFloat(prompt("Digite o peso (em kg): "));
// const altura = parseFloat(prompt("Digite a altura (em metros): "));

// calcularIMC(peso, altura);

console.log("----------------------------------------------------");
// function inverterFrase(frase) {

//   // Dividindo a frase em palavras
//   let palavras = frase.split(" ");

//   // Invertendo cada palavra
//   let palavrasInvertidas = palavras.map(function (palavra) {
//     return palavra.split("").reverse().join("");
//   });

//   // Juntando as palavras invertidas em uma nova frase
//   let fraseInvertida = palavrasInvertidas.join(" ");

//   // Exibindo a frase invertida
//   console.log(fraseInvertida);
// }
// const frase = prompt("Digite uma frase: ");

// inverterFrase(frase);

// // Exemplo de uso da função

console.log("----------------------------------------------------");

function contarVogais(frase) {
  const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; // Lista de todas as vogais, maiúsculas e minúsculas  "aeiouAEIOU"
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso:
const frase = "hoje é segunda-feira";
console.log(contarVogais(frase));

console.log("----------------------------------------------------");

function contarLetra(frase1, letra1) {
  // Converte a frase para minúsculas e a letra também
  frase1 = frase1.toLowerCase();
  letra1 = letra1.toLowerCase();

  let contador = 0;

  // Loop através da frase e conta as ocorrências da letra
  for (let i = 0; i < frase1.length; i++) {
    if (frase1[i] === letra1) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso:
const frase1 = "Escreva uma frase para esta função.";
const letra1 = "o";
console.log(contarLetra(frase1, letra1)); // Saída: 2

console.log("----------------------------------------------------");

// //5
// function calcularTempoDeTrabalho(horaEntrada, horaSaida) {
//   // Converte as horas de entrada e saída para objetos Date
//   const [entradaHoras, entradaMinutos, entradaSegundos] = horaEntrada.split(':').map(Number);
//   const [saidaHoras, saidaMinutos, saidaSegundos] = horaSaida.split(':').map(Number);

//   const dataEntrada = new Date();
//   const dataSaida = new Date();

//   dataEntrada.setHours(entradaHoras, entradaMinutos, entradaSegundos, 0);
//   dataSaida.setHours(saidaHoras, saidaMinutos, saidaSegundos, 0);

//   // Verifica se as horas estão dentro do intervalo permitido
//   if (dataEntrada.getHours() < 8 || dataSaida.getHours() > 18) {
//     console.log('As horas de entrada ou saída estão fora do intervalo permitido (08:00:00 - 18:00:00).');
//     return;
//   }

//   // Calcula a diferença em milissegundos
//   const tempoTrabalho = dataSaida - dataEntrada;

//   // Converte a diferença de milissegundos para horas, minutos e segundos
//   const horas = Math.floor(tempoTrabalho / (1000 * 60 * 60));
//   const minutos = Math.floor((tempoTrabalho % (1000 * 60 * 60)) / (1000 * 60));
//   const segundos = Math.floor((tempoTrabalho % (1000 * 60)) / 1000);

//   console.log(`Tempo de trabalho: ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);
// }

// // Exemplo de uso:
// calcularTempoDeTrabalho("09:00:00", "17:30:00");  // Saída: Tempo de trabalho: 8 horas, 30 minutos e 0 segundos.

console.log("----------------------------------------------------");
function desenharRetangulo(altura, largura) {
  for (let i = 0; i < altura; i++) {
    let linha = ""; // Cria uma linha vazia para cada iteração
    for (let j = 0; j < largura; j++) {
      linha += "*"; // Adiciona um asterisco à linha
    }
    console.log(linha); // Imprime a linha completa
  }
}

// Exemplo de uso:
desenharRetangulo(20, 20); // Desenha um retângulo com 5 linhas e 10 colunas

console.log("----------------------------------------------------");

//7
function desenharTriangulo(altura1) {
  for (let i = 1; i <= altura1; i++) {
    let linha1 = " "; // Cria uma linha vazia para cada iteração
    for (let j = 1; j <= i; j++) {
      linha1 += "*"; // Adiciona um asterisco à linha
    }
    console.log(linha1);
  }
}

// Exemplo de uso:
desenharTriangulo(10);

console.log("----------------------------------------------------");

//8

function desenharCaixaQuadrada(lado) {
  for (let i = 0; i < lado; i++) {
    let linha = "";

    for (let j = 0; j < lado; j++) {
      if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
        linha += "*"; // Coloca asteriscos nas bordas
      } else {
        linha += " "; // Coloca espaços no meio
      }
    }

    console.log(linha); // Imprime a linha
  }
}

// Exemplo de uso:
desenharCaixaQuadrada(10); // Desenha uma caixa quadrada com lado 5

console.log("----------------------------------------------------");
/*
// Definindo a classe Aluno
class Aluno {
  constructor(nome, numero, nota) {
    this.nome = nome;
    this.numero = numero;
    this.nota = nota;
  }
}

// Criando alguns alunos e adicionando ao array
const alunos = [
  new Aluno('João', 1, 8.5),
  new Aluno('Maria', 2, 6.0),
  new Aluno('Carlos', 3, 9.2),
  new Aluno('Ana', 4, 4.5),
  new Aluno('Lucas', 5, 7.8)
];

// Função para listar todas as notas
function listaNotas() {
  alunos.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} (Número: ${aluno.numero}) - Nota: ${aluno.nota}`);
  });
}

// Função para encontrar a melhor nota
function melhorNota() {
  let melhorAluno = alunos[0];
  alunos.forEach(aluno => {
    if (aluno.nota > melhorAluno.nota) {
      melhorAluno = aluno;
    }
  });
  console.log(`Melhor nota: Aluno ${melhorAluno.nome} (Número: ${melhorAluno.numero}) - Nota: ${melhorAluno.nota}`);
}

// Função para encontrar a pior nota
function piorNota() {
  let piorAluno = alunos[0];
  alunos.forEach(aluno => {
    if (aluno.nota < piorAluno.nota) {
      piorAluno = aluno;
    }
  });
  console.log(`Pior nota: Aluno ${piorAluno.nome} (Número: ${piorAluno.numero}) - Nota: ${piorAluno.nota}`);
}

// Função para calcular a média das notas e encontrar o aluno mais próximo da média
function notaMedia() {
  const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
  const media = somaNotas / alunos.length;

  let alunoMaisProximo = alunos[0];
  let menorDiferenca = Math.abs(alunoMaisProximo.nota - media);

  alunos.forEach(aluno => {
    const diferenca = Math.abs(aluno.nota - media);
    if (diferenca < menorDiferenca) {
      alunoMaisProximo = aluno;
      menorDiferenca = diferenca;
    }
  });

  console.log(`Aluno mais próximo da média: Aluno ${alunoMaisProximo.nome} (Número: ${alunoMaisProximo.numero}) - Nota: ${alunoMaisProximo.nota}`);
}

// Função para contar o número de notas negativas
function notasNegativas() {
  const negativas = alunos.filter(aluno => aluno.nota < 5);
  console.log(`Número de notas negativas: ${negativas.length}`);
}

// Função para contar o número de notas positivas
function notasPositivas() {
  const positivas = alunos.filter(aluno => aluno.nota >= 5);
  console.log(`Número de notas positivas: ${positivas.length}`);
}

// Menu de opções
function menu() {
  const opcao = prompt(`Escolha uma opção:
  1 - Lista de Notas
  2 - Melhor Nota
  3 - Pior Nota
  4 - Nota Média
  5 - Notas Negativas
  6 - Notas Positivas`);

  switch (opcao) {
    case '1':
      listaNotas();
      break;
    case '2':
      melhorNota();
      break;
    case '3':
      piorNota();
      break;
    case '4':
      notaMedia();
      break;
    case '5':
      notasNegativas();
      break;
    case '6':
      notasPositivas();
      break;
    default:
      console.log('Opção inválida!');
  }
}

// Chama o menu
menu();
*/


const opcao = prompt(`Escolha uma opção:  1 - Lista de Notas
  2 - Melhor Nota
  3 - Pior Nota
  4 - Nota Média
  5 - Notas Negativas
  6 - Notas Positivas`);
