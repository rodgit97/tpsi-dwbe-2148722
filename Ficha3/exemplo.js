// var array = [1, 2, 3, 4, 5, 6];
// var n = array[0];
// for (var i = 0; i < 0; i++) {
//   //   console.log(i);
//   if (array[i] > n) n = array[i];
//   return n;
// }
//---------------------------------------------
//array=[1,5,11];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == value) return true;
// }
// return false;
//---------------------------------------------

a = [1, 2, 3, 4];
var temp = a[0];
a[0] = a[1];
a[1] = temp;

console.log(a);
//--------------------
a[0] = a[1];

console.log(a);
//---------------------------------------------
// {
// indexOf: function(array, value) {
//     var index = [7, 9, 5, 7, 8];

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] == value){
//         index = 1;
//       }
//     }
//     return index;
//   }
// }
//---------------------------------------------
//
var ArrayUtils = require("./ArrayUtils");
var a1 = [1, 2, 3];
var a1 = [4, 6, 5];
var a3 = ArrayUtils.concatenate(a1,a2);