const express = require('express');
const router = express.Router();

const postRouter = require('./post');
const userRouter = require('./user');
const authRouter = require('./auth');
const pageRouter = require('./page');
const controller = require('./board.controller')

router.use('/', pageRouter);
router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/user', userRouter);
router.use('/page', pageRouter);

//router.get('/board',controller.board);

module.exports = router;