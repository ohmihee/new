const { User } = require('../../models');

// board/list
let list = async (req,res)=>{
    //select
    let UserList = await User.findAll({})
    res.render('list.html')
}

let write = async (req,res)=>{
    //insert
    // let res = await User.create({
    //     //...
    // })
    res.render('write.html')
}

let modify = (req,res)=>{
    //modify
    //let rst = await User.update({필드:바뀔내용,where:{필드값}})
    res.render('modify.html')
}

let view = (req,res)=>{
    res.render('view.html')
}



module.exports={
    list:list,
    view:view,
    modify:modify,
    write:write,

}