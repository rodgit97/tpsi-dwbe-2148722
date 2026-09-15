var log = {
  info: function (info) {
    console.log("info: " + info);
  },
  warning: function (warning) {
    console.log("warning: " + warning);
  },
  error: function (error) {
    console.log("error: " + error);
  },
};
module.exports = log;

module.exports.log = function (msg) {
  console.log(msg);
};

module.exports = function (msg) {
  console.log(msg);
};
