const fetch = require('node-fetch');
const url = 'https://api.upbit.com/v1/market/all?isDetails=false';
const options = {method: 'GET', headers: {Accept: 'application/json'}};



async function showPrice(item){
    const url2 = 'https://api.upbit.com/v1/ticker?markets='+item;
    const options2 = {method: 'GET', headers: {Accept: 'application/json'}};

    const reponse = fetch(url2, options2);
    const data = await reponse.then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

    return data;
}

function showAll(){
    let marketArr = [];
    const reponse = fetch(url, options);
    const data = reponse.then(res => res.json())
    .then(json => {
        for(var i=0; i<50;i++){
            if(!json[i].market.indexOf('KRW')){
                marketArr.push(json[i].market);
             
            }
        }
        console.log(marketArr);
    })
    .catch(err => console.error('error:' + err));
    return data;
}

const items = showAll();
console.log(items)