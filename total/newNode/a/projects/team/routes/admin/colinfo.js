const {Col} = require('../../models')
const qs = require('qs')
const pwHash = require('../../createHash.js')
const ctoken = require('../../jwt.js')



let getCol = (req,res)=>{
    res.render('admin/col.html')
    
}
let postCol = async (req,res)=>{   
    if(req.body.make=="생성"){
        let watch = true
        let boardName =  req.body.title
        let boardType = req.body.form_type
        let {content} = req.body
        await Col.create({boardName,boardType,content,watch})
    }else if(req.body.remove=="삭제"){       
        console.log(req.body.table_remove)
        await Col.destroy({
            where:{boardName:req.body.table_remove}
        })
    }else{
        console.log('update 코드 수정할 곳 admin/colinfo.js_postCol')
    }
    res.render('admin/col.html')
}


let greet = (req,res)=>{
    res.render('./admin/col/greet.html')
}
let history = (req,res)=>{
    res.render('./admin/col/history.html')
}
let route = (req,res)=>{
    res.render('./admin/col/route.html')
}
let teacher = (req,res)=>{
    res.render('./admin/col/teacher.html')
}
let facility = (req,res)=>{
    res.render('./admin/col/facility.html')
}
module.exports = {
    greet,history,route,teacher,facility,getCol,postCol}