const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const serverless  = require('serverless-http')

const corsOptions = {
    origin: '*',
}


const app = express();
app.use(cors(corsOptions))
app.use('/.netlify/functions/app' , routes)

module.exports.handler  = serverless(app);