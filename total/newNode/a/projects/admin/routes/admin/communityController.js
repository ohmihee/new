const {Submain,Community} = require('../../models')

let report_page = async (req,res)=>{
    let subboard = await Submain.findAll({attributes:['subBoard']})
    let communityres = await Community.findAll({})
    res.render('./admin/community.html',{subboard})
}

let delete_selection = async (req,res)=>{
    await Community.destroy({
        where:{
            id:req.body.num
        }
    })
    console.log(req.body.num)
    res.send('hi')
}

let sub_board_search = async (req,res)=>{
    let idid = req.query.id
    let ididx = req.query.idx
    console.log(req.query.idx,'========================================================')
    console.log(req.query.id)
    //console.log(idid)
    switch (idid){
        case idid:
            let subboard = await Submain.findAll({
                where:{
                    mainBoard:ididx
                }
            })
            let noticeres = await Community.findAll({
                where:{
                    subBoard:idid
                }
            })
            let originalValue = await Submain.findOne({
                where:{
                    mainBoard:ididx
                }
            })
            
            
            //res.send(idid)
            //console.log('sub_board_Search')
            res.render('./admin/top.html',{subboard,noticeres,originalValue})
            break;
        default:
            res.send('그 이외의 값');
            break;
    }
}

let make_contents = async (req,res)=>{
    let writer = 'algml'
    console.log(req.body.id,',,,,,,,,,,',req.body.idx)
    let {id,idx} = req.body
    let {mainBoard,file,subBoard,title,contents,img,writeaut,readaut,replyaut,count}= req.body
    await Community.create({mainBoard,subBoard,title,contents,count,writer,img,file,writeaut,readaut,replyaut})
    // 같은 실수 반복한 것 -> db에 data를 넣어줄때는 {}안에 넣어주어야 한다.
    //let subboard = await Community.findAll({})
    res.redirect(`/admin/sub_board_search?idx=${idx}&id=${id}`)
}

let write = (req,res)=>{
    let {id,idx} = req.query
    //console.log(req.query.id,'=============',req.query.idx)
    //console.log(req.quety.idx,'write에서==========================')
    res.render('./admin/community_write.html',{id,idx})
}

let subboard_searched = async (req,res)=>{
    
    let subboard = await Submain.findAll({
        where:{
            mainBoard:req.query.idx,
            subBoard:req.query.id
        }
    })
    let title_content = await Community.findOne({
        where:{
            id:req.query.idxx
        }
    })
    console.log(title_content.writer)
    
    res.render('./admin/header.html',{subboard,title_content}) 
}
module.exports = {report_page,sub_board_search,make_contents,write,subboard_searched,delete_selection}