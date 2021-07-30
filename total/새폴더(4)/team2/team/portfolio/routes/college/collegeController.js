const {Adminlist, Submain,User,Facility,Community,Course, Employed, Portfolio,Mainvisual,Visitor, Siteset, Coinfo,Main} = require('../../models')
const {sequelize} = require('../../models/index.js')


let history = async (req,res)=>{
    
        let facility_img = await Facility.findAll({})
        res.render('college/history.html',{facility_img})
    
}

let interior =(req,res)=>{
    res.render('college/interior.html')
}

let introduction =(req,res)=>{
    res.render('college/introduction.html')
}

let location =(req,res)=>{
    res.render('college/location.html')
}

let teachers =(req,res)=>{
    res.render('college/teachers.html')
}


module.exports ={
    history,
    interior,
    introduction,
    location,
    teachers,
}