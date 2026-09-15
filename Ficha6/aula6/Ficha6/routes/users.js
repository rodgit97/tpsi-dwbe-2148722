var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('isto é uma pagina de utilizadores');
});

module.exports = router;
