
var express = require('express'); 
var router = express.Router();
 
 
router.post('/', function(req, res, next) {
    res.send('post_page');
});
 
 
module.exports = router;


