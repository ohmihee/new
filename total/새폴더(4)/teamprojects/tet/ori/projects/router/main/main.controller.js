let main = (req,res) => {
    userid = req.session.userid
    username = req.session.username
    isLogin = req.session.isLogin
    flag = req.query.flag
    type = req.query.type
    res.render('index.html',{
        userid,
        username,
        flag,
        isLogin,
        type
    })
}

module.exports = {
    main,
}