let {Main,Submain} = require('../../models')

let board_page = async (req,res)=>{
    let mainBoard = await Submain.findAll({attributes:['mainBoard']})
    //console.log(mainBoard)
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
}

let board_make = async (req,res)=>{
    let {tableName,mainBoard,subBoard,url,contentType,watchaut,writeaut,replyaut} = req.body
    await Submain.create({mainBoard,subBoard,contentType,watchaut,writeaut,replyaut})
    try{
        await Main.create({mainBoard,subBoard,watchaut,url})
    }catch(e){
        console.log(e,'---------------------err----------------')
    }
    let boardres = await Submain.findAll()

    res.render('./admin/board_make.html',{boardres})
}

let board_manage = async (req,res)=>{
    let num = ((req.body.number).length-1)
    console.log(req.body.numbercheck[num],'mainboardController=====check id===================')
    for(i=0;i<=num;i++){
        if(req.body[i]=='수정'){
            let subBoardR = req.body.subBoard[i]
            let watchautR = req.body.watchaut[i]
            let writeautR = req.body.writeaut[i]
            let replyautR = req.body.replyaut[i]
            let mainBoardR = req.body.mainBoard[i]
            let contentTypeR = req.body.contentType[i]
                idx = req.body.numbercheck[i]
            await Submain.update({
                mainBoard:mainBoardR,
                subBoard:subBoardR,
                watchaut:watchautR,
                writeaut:writeautR,
                replyaut:replyautR,
                contentType:contentTypeR
            },{where:{
                id:idx                
            }
        })
        }else if(req.body[i]=='삭제'){
                idx = req.body.numbercheck[i]
            await Submain.destroy({
                where:{
                    id:idx
                }
            })
        }
    }
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
}


module.exports = {board_page,board_make,board_manage}