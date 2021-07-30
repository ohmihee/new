const {Adminlist,User,Community} = require('../../models')
const pwHash = require('../../createHash.js')
const ctoken = require('../../jwt.js')
const { sequelize } = require('../../models/adminlist')


let login = async (req,res)=>{
    // let idxx = await Adminlist.findOne({
    //     where:{
    //         idx:'algml'
    //     }
    // })
    // let ress = await Community.findAll({
    //     where:{
    //         writer:idxx.idx
    //     }
    // })
    // let resss = []
    // for(i=0;i<2;i++){
    //     resss.push(ress[i].title)
    // }
    
    
    //let dataa = await sequelize.query('SELECT * FROM Adminlist AS A LEFT JOIN (select subBoard, title, writer from Community') AS B on A.idx=B.writer
   // console.log('==========',ress,'=========================')
    res.render('./admin/main.html')
}

// let adminList = await Adminlist.findAll()

let login_on = async (req,res)=>{
    let idxx = req.body.idx
    let psww = req.body.psw
    let hashedpsw = pwHash(psww) 
    try{
        let resu = await Adminlist.findOne({
            where:{
                idx:idxx,
                psw:hashedpsw
            }
        })
        let token = ctoken(idxx)
        res.cookie('AccessToken',token,{})
        req.session.uid = {["local"]:resu.idx}
        req.session.level = resu.level        
        
        res.render('./admin/admin_list',{resu})
    }catch(e){    
        res.send('해당하는 사용자가 존재하지 않습니다.')
    }
}

let admin_list = async (req,res)=>{
    let adminList = await Adminlist.findAll({})
    res.render('./admin/admin_list.html',{adminList})
}   

let admin_list_get = async (req,res)=>{

    let resu = req.session
    let adminList = await Adminlist.findAll({})
    res.render('./admin/admin_list.html',{resu,adminList})
}
let admin_add = async (req,res)=>{
    let {name,idx,psw,birth,courseName,level,tel,startDate,email,img} = req.body
    psw = pwHash(psw)

    await Adminlist.create({name,idx,psw,birth,courseName,level,tel,startDate,email,img})
    
    res.redirect('/admin/admin_list')
}


let searched_data = async (req,res)=>{
    if(req.body.delete=='삭제'){
        await Adminlist.destroy({
            where:{
                idx:req.body.Idx
            }
        })
        res.send('해당 관리자가 삭제되었습니다.')
    }else{
        res.send('수정 부분 코드 짜기')//===================================
    }
}

let admin_search_get = (req,res)=>{
    res.redirect('/admin/admin_list')
}

let admin_search = async (req,res)=>{
    try{
        if(req.body.search_condition_m=="name"){
            let resu = await Adminlist.findOne({
                where:{
                    name:req.body.value
                }
            })
            res.render('./admin/admin_list.html',{resu})
        }else if(req.body.search_condition_m=="class_name"){
            let resu = await Adminlist.findOne({
                where:{
                    courseName:req.body.value
                }
            })
            res.render('./admin/admin_list.html',{resu})            
        }
    }catch(e){
        res.send('해당하는 사용자가 존재하지 않습니다.')
    }
}

let user_list = async (req,res)=>{
    let resu = await User.findAll({})
    res.render('./admin/user_list.html',{resu})
}

let add_user = async (req,res)=>{
    try{
        let {userName,userIdx,userPsw,courseName,paycheck,userBirth,created_at,userTel,userAddress,employmentStatus,portfolio,userEtc,userImg} = req.body
        userPsw = pwHash(userPsw) 
        await User.create({userName,userIdx,userPsw,courseName,paycheck,userBirth,created_at,userTel,userAddress,employmentStatus,portfolio,userEtc,userImg})
        // redirect로 db 값 전달하는 방법
        res.redirect('/admin/user_list')
    }catch(e){
        res.send('동일한 아이디가 이미 존재합니다.')
        console.log(e,'===============================')
    }
}

let site_set = (req,res)=>{
    res.render('./admin/siteset.html')
    
}

let site_set_post = (req,res)=>{
    res.render('./admin/siteset.html')
    console.log('siteset')
}


module.exports = {login,login_on,admin_list,admin_add,searched_data,admin_search,user_list,add_user,admin_search_get,site_set,site_set_post,admin_list_get}

// 질문
// 수정클릭시 update 방법
// 가입일 포멧에 맞춰서 넣는 것
// redirect로 db 값 전달하는 방법


// 

//let loaddata = await sequelize.query(SELECT * FROM application AS A LEFT JOIN (select subject, id from curruculum) AS B on A.curr_id=B,id)
