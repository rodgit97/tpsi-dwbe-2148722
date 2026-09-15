//4
//a
var array = [];

function test() {
  return 8;
}
array.push(function () {
  console.log("hello mundo 1");
});
for (let i = 0; i < array.length; i++) {
  array[i]();
}
array.forEach((e) => {
  e();
});

var greet = {
  hello: function () {
    console.log("hello");
  },
  mundo: function () {
    console.log("mundo");
  },
  number: function () {
    console.log("1,2,3");
  },
};
