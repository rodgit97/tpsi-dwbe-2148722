function started() {
  console.log("Started download");
}
function update(value) {
  console.log("download " + value + " % ");
}
function completed() {
  console.log("Download completed");
}
function performDownload(start, upda, complet) {
  start();
  for (let i = 0; i <= 100; i++) {
    upda();
  }
  complet();
}
performDownload(started, update, completed);
//----------------------------------------------------------------

var ArrayUtils = require("./ArrayUtils");
// var a1 = [1, 2, 3];
// var a1 = [4, 6, 5];
// var a3 = 

var array = [];
var empty = ArrayUtils.isEmpty(array);
ArrayUtils.is;

//----------------------------------------------------------------
