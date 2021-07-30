
let login =(req,res) =>{
    res.send('login 입니다')
}

let join = (req,res) =>{
    res.send('join')
}

let info = (req,res)=>{
    res.send('info')
}
 
let info_modify = (req,res) =>{
    res.send('info_modify')
}

module.exports={
    login,
    join,
    info,
    info_modify,
}