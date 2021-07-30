const express = require('express');
const router = express.Router();
const controller = require('./controller')



router.post('/modify:url',controller.modify_succece)
router.post('/write:url',controller.write_succece)

router.get('/delete:url',controller.Delete)
router.get('/modify',controller.modify)
router.get('/list:url',controller.list)
router.get('/write',controller.write)
router.get('/view',controller.view)

module.exports = router;