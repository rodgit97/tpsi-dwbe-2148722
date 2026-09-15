// var ArrayUtils = {
//module.exports
//a
var ArrayUtils = {
  isEmpty: function (array) {
    if (array.length == 0) return true;
    else return false;
  },
  max: function (array) {
    var max = array[0];
    for (i = 0; i < array.length; i++) {
      var numero = array[i];
      if (numero > max) max = numero;
    }
    return max;
  },
  min: function (array) {
    var min = array[0];
    for (i = 0; i < array.length; i++) {
      var numero = array[i];
      if (numero < min) min = numero;
    }
    return min;
  },
  average: function (array) {
    var average = array[0];
    for (let i = 0; i < array.length; i++) {
      sum += array[1];
    }
    var average = sum / array.length;
    return average;
  },
  indexOf: function (array, value) {
    var index = [5, 3, 10, 7, 8];
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) index = 1;
    }
    return index;
  },
  subArray: function (array, startIndex, endIndex) {
    var sub = [];
    for (let i = startIndex; i <= endIndex; i++) sub.push = array[i];
    return sub;
    var sub = [3, 10, 7];
    for (let i = 0; i < array.length; i++) {
      if (i >= startIndex && i <= endIndex) sub.push(array[i]);
    }
  },
  isSameLenght: function (a1, a2) {
    return array1.length == array2.length;
  },
  reverse: function (array) {
    var index = -1;

    for (let i = 0; i < array.length; i++) {}
  },
  swap: function (array, index1, index2) {
    var array = [5, 3, 10, 7, 8];
    var tmp = array[i1];
    array = [i1] = array[i2];
    array[i2] = tmp;
    return array;
  },
  contains: function (array, value) {
    var index = -1;

    for (let i = 0; i < array.length; i++) {}
  },
  concatenate: function (a1, a2) {
    var copy = a1.copywithin(0);
    // let array1 = "troca";
    // let array2 = "array";
    // let result = array1.concat(array2);
    // var index = -1;
    for (let i = 0; i < a2.length; i++) {
      copy.push(a2[i]);
    }
    return copy;
  },
};

module.exports = ArrayUtils;
