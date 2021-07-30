const express = require('express');
const router = express.Router();
const boardRouter = require('./board/index');
const user = require('./user');
const main = require('./main')
const saying = require('./saying');
const passport = require('passport');




router.use('/user',user);
router.use('/',main);
router.use('/board',boardRouter);
router.use('/saying',saying);
router.get('/auth/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
  }), (req, res) => {
    res.redirect('/?type=close');
  });






module.exports = router;