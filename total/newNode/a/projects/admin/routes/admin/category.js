const {Submain, Adminlist} = require('../../models')

let index = async (req,res)=>{    
    let idxx = req.query.idx
    try{
        switch (idxx){
            case 'administrator':
                    let resu  = await Adminlist.findAll({})
                    res.render('./admin/admin_list.html',{resu})
                break   
            case `${idxx}`:
                    subboard = await Submain.findAll({
                    where:{
                        mainBoard:`${idxx}`
                    }
                })
                console.log(subboard[0].contentType)
                res.render('./admin/top.html',{subboard})
                break;
        }
    }catch(e){
        console.log(e,'==================error_category.js - admin_list.html')
        res.render('./admin/admin_list.html')
    }
}

module.exports = {index}