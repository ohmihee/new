const express = require('express');
const router = express.Router();
const controller = require('./main.controller');


router.get('/', controller.mainCon);


module.exports = router;

