var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Books are cool!')
}); // end router.get


module.exports = router;
