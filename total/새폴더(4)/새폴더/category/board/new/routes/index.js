const express= require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:false}));

router.get('/',(req,res)=>{
    res.render('index.html');
})
router.get('/file',(req,res)=>{
    res.render('index.html');
});

// router.get('/list',(req,res)=>{
//     res.render('./board/list.html');
// });
// url창에는 /mail/list로 입력한다.
router.get('/list',(req,res)=>{
    res.render('./board/write.html');
});


router.get('/view',(req,res)=>{
    res.render('./board/view.html');
});


// 보내는 파일에서의 경로는 '/'즉 기본 상태로 주고
// 받는 곳에서 경로를 작성하여 준다. ex)app.use('/board',board);
 
module.exports = router;