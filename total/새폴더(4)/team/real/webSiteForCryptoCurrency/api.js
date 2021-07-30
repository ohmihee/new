


const fetch = require('node-fetch');

const url = 'https://api.upbit.com/v1/ticker?markets=KRW-CBK';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));