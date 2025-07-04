var express = require('express');
var router = express.Router();

/* GET cadastro page. */
router.get('/', function(req, res, next) {
  res.render('cadastro');
});

module.exports = router;
