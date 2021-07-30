const express = require('express');
const app = express();
require('dotenv').config();
const env = process.env;
const port = env.SERVER_PORT || 3001;

app.listen(3000, ()=>{
    console.log('it works!');
})