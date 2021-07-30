const express = require('express');
const router = express.Router();
const controller = require('./saying.controller');

console.log(controller);
router.use('/',controller.index);

module.exports = router;