const express = require('express');
const router = express.Router();
const controller = require('./main.controllers')


router.get('/',controller.main);

module.exports = router;