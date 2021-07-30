const express = require('express');
const router = express.Router();
const controller = require('./board.controllers');

router.use('/list',controller.list);
router.use('/view',controller.view);
router.use('/write',controller.write);
router.use('/modify',controller.modify);
//use보다는 get이나 post를 사용하는 것이 더욱 좋다. 

module.exports = router;