const express = require('express')

const nunjucks = require('nunjucks')
const port = process.env.PORT||3007
//const querystring = require('querystring');
const app = express()
const bodyParser = require('body-parser')
/*

app.set('view engine','html')

app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{express:app})

let templete



app.get('/',(req,res)=>{
    res.render('index2')
})

*/


const request = require('request');
const querystring = require('querystring');
let template_objectObj = {
object_type: 'text',
text: ' Hello Kakao!(텍스트 영역입니다. 최대 200자 표시 가능합니다.)',
'link': {
web_url: 'https://developers.kakao.com',
mobile_web_url: 'https://developers.kakao.com'
}
};
// Javascript -> JSON 타입으로 변경
let template_objectStr = JSON.stringify(template_objectObj);
let options = {
url: 'https://kapi.kakao.com/v2/api/talk/memo/default/send',
method: 'POST',
headers: {
'Authorization': 'GvZKmK6MsH4BzuOfEIHagw10k93OzFSkTLOVWAorDKcAAAF5p3-kkw',
'Content-Type': 'application/x-www-form-urlencoded',
},
form: {
template_object: template_objectStr,
}
};
function callback(error, response, body) {
console.log(response.statusCode);
if (!error && response.statusCode == 200) {
console.log(body);
}
}
request(options, callback);

app.listen(port,()=>{
    console.log(`server start ${port}`)
})