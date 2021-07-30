let view = (req,res) =>{
    res.send('view')
}

let write = (req,res) =>{
    res.send('write')
}

let list = (req,res) =>{
    let {url} = req.query;
    res.send('list')
}
let modify = (req,res) =>{
    res.send('modify')
}

let Delete = (req,res) =>{
    res.send('delete')
}

let write_succece = (req,res) =>{
    res.send('write_succece')
}
let modify_succece=(req,res)=>{
    res.send('modify_succece')
}

module.exports={
    view,
    write,
    list,
    modify,
    Delete,
    write_succece,
    modify_succece
}