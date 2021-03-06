const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/join',controller.join);
router.get('/login',controller.login);

router.get('/info',controller.info);
router.post('/join_success',controller.join_success);
router.post('/login_check',controller.login_ck);

module.exports = router;