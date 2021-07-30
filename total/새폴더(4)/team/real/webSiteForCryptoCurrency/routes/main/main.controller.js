const Main = require("../coin_info")




async function a(){
    /*
    const b = await Main();
    console.log(b);
   */ 
}
a();

let main  = (req, res) => {
    Main().then(data => {
        res.render('./main/index.html',{
            issue:data
        });
})};

exports.mainCon = main;