const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('main')
    console.log('main');
})
router.get('/file',(req,res)=>{
    res.render('list.html');
});

router.get('/list',(req,res)=>{
    res.send('list');
});
// url창에는 /mail/list로 입력한다.
router.get('/write',(req,res)=>{
    res.send('write');
});

router.get('/view',(req,res)=>{
    
    res.send('view');
});


// 보내는 파일에서의 경로는 '/'즉 기본 상태로 주고
// 받는 곳에서 경로를 작성하여 준다. ex)app.use('/board',board);
 
module.exports = router;