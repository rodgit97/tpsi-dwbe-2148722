//1
function naCondicao(imc, peso, alt) {
  //   imc = 0;
  //   peso = 0;
  //   alt = 0;
  let imc = peso / (alt * alt);
  if (imc < 18.5) {
    return "abaixo de peso";
  } else if (imc > 18.5 && imc < 25) {
    return "no peso normal";
  } else if (imc > 25 && imc < 30) {
    return "acima do peso";
  } else if (30 < imc) {
    return "obeso";
  } else {
    return "não é confirmado";
  }
}
console.log(condicao(imc, peso, alt));

console.log("-----------------------------------------");
// //2
// function inverse(str) {
//   var splitted = str.split(" ");
//   for (let i = 0; i < splitted.length; i++) {
//     const pal = splitted[i];
//     console.log(str[i]);
//     for (let j = 0; j < pal.length; j++) {
//       console.log(pal[j]);
//       inverse += pal[j];
//     }
//     // console.log(pal[0]);
//     inverse += " ";
//   }
//   return inverse;
// }
// //2
// function numeroVogais(str) {
//     var contar=0;
//     str=str.toLowerCase();
//     var vogais="aeiou";

// for (let i = 0; i < str.length; i++) {
//    if (str [i]=="a" || str [i]=="e" || str [i]=="i" || str [i]=="o" || str [i]=="u" )
//   }
// return contar
// }
// console.log(numeroVogais())

// console.log(inverse("Hoje é Domingo"));

console.log("-----------------------------------------");

// function numeroVogais(str) {
//   let contar = 0;
//   //   let vogais = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (
//       vogais == "a" ||
//       vogais == "e" ||
//       vogais == "i" ||
//       vogais == "o" ||
//       vogais == "u"
//     ){

//     }
//       // if (vogais.includes(str[i])) {
//       //     contar++
//       // }

//       return contar;
//   }
// }
// console.log(numeroVogais("hoje é segunda-feira"));
console.log("-----------------------------------------");

// function contarCarat(str,char){
// var count=0;
// str=str.toLowerCase();
// char=char.toLowerCase();

// for (let i = 0; i < str.length; i++) {
//     if (str[i]==char) {
//        count++;
//     }
//     return count;
// }
// var count = contarCarat();
// }
// console.log(contarCarat());

console.log("-----------------------------------------");

console.log("-----------------------------------------");
// // //6
// function desenharQuadrado(heigh, width) {
//   line = "";
//   for (let i = 0; i < width; i++) {
//     line += "*";
//   }
//   for (let j = 0; j < heigh; j++) {}
//   console.log(line);
// }
// console.log(desenharQuadrado(10, 20));

console.log("-----------------------------------------");
// //7
// function drawTriangle(width,heigh) {
//   line = "";
//   for (let i = 0; i < width; i++) {
//     line += "*";
//     console.log(line);
//   }
// }
// console.log(drawTriangle(10,10));
