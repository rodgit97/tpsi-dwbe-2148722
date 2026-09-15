// //console.log("teste de funcionamento ficha 1")

// //primeiro
// var p1= 11;
// var p2 = 12;
// var freq = 13;
// //-segundo
// function calculateGrade(p1,p2,freq){
//     //-primeiro
//     notaFinal = p1 * 0.3 + p2 * 0.4 + freq * 0.3

//     console.log("nota final: "+ notaFinal);

//     if(notaFinal >= 9.5)

//         console.log("APROVADO");
//     else
//     console.log("REPROVADO");
// console.log(" ");
// }

// calculateGrade(14,13,12);
// calculateGrade(8,18,15);
// calculateGrade(11,11,11);
// calculateGrade(4,3,2);

//--------------------------------------------------------------------
// // const expr = "fevereiro";
// switch(mes){
//     case 1:
//     console.log("janeiro")
//     break;
//     case 2:
//     console.log("fevereiro")
//     break;
//     case 3:
//     console.log("março")
//     break;
//     case 4:
//     console.log("abril")
//     break;
//     case '':
//     console.log("numero nao confirmado")
//     break;

// }
//--------------------------------------------------------------------
function calculate(vl1, vl2, op) {
  if (op == "+") {
    return vl1 + vl2;
  } else if (op == "-") {
    return vl1 - vl2;
  } else if (op == "*") {
    return vl1 * vl2;
  } else if (op == "/") {
    return vl1 / vl2;
  } else op == "";
  {
    return console.log("");
  }
}
//--------------------------------------------------------------------
// function multi(vl1, vl2) {
//   var res = vl1 * vl2;
//   if (5 <= vl1 && 5 <= vl2 <= 20) {
//     return res;
//   };
// };

// multi(5,20)

// function multi2(val3, res2) {
//     var res2 = 0;
//     while (res2 <= 20) {
//       console.log(val3);
//     };
//   };
//   multi2(5)
//--------------------------------------------------------------------
// function sum(val4) {
//   var res = 0;
//   for (var i = 0; i <= val4; i++) {
//     return res;
//   }
// }
// sum(5)
//--------------------------------------------------------------------
// function sum(val5) {
//   var res5 = 1;
//   for (var i = 2; i <= val5; i++) {
//     res5 += i;
//     return res5;
//   }
// }
// // console.log(res5);
//--------------------------------------------------------------------

// function coloc(num) {
//   for (var i = 0; i <= soma3; i++) {
//     soma3 = i + num;
//   }
//   return soma3;
// }
// soma3 = coloc(5);
// console.log(soma3);
//--------------------------------------------------------------------

function factor(num1) {
  max = num1;
  min = 1;
  for (var i = 0; i <= num1; i++) {
    res6 = min * (1 * (num1 - 1) * min);
  }
  return res6;
}
res6 = factor(5);
console.log(res6);
//--------------------------------------------------------------------
// function factor(num1) {
//     max = num1;
//     for (var i = 0; i <= num1; i++) {
//       res6 = min * (1 * (num1 - 1) * min);
//     }
//     return res6;
//   }
//   res6 = factor(5);
//   console.log(res6);
//--------------------------------------------------------------------
var array = [1, 2, 3];
function min(array) {
  var index = 0;
  var m = array[0];
  while (index < array.length) {
    if (m > array[index] < m) m = array[index];
    index++;
  }
  return m;
}
//--------------------------------------------------------------------
function min(array) {
  var m = array[0];
  for (let index = 1; index < array.length; index++) {
    if (m > array[index] < m) m < array[index];
    index--;
  }
  return m;
}
console.log("o valor minimo no array:[" + array + "] é:" + min);
//////////////////////////
function max(array) {
  var m = array[0];
  for (let index = 1; index < array.length; index++) {
    if (m > array[index] < m) m > array[index];
    index++;
  }
  return m;
}
console.log("o valor maximo no array:[" + array + "] é:" + max);
