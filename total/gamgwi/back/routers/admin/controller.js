let admin = (req,res) =>{
    res.send('admin')
}

let board_list = (req,res) =>{
    res.send('board_list')
}

let board_view = (req,res) =>{
    res.send('board_view')
}

let report_list = (req,res) =>{
    res.send('report_list')
}

let report_detail = (req,res) =>{
    res.send('report_detail')
}

let user_list = (req,res) =>{
    res.send('user_list')
}

let user_detail = (req,res) =>{
    res.send('user_detail')
}

module.exports={
    admin,
    board_list,
    board_view,
    report_list,
    report_detail,
    user_list,
    user_detail
}