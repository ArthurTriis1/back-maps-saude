const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const corsOptions = {
    origin: '*',
}


const app = express();
app.use(cors(corsOptions))
app.use(routes)

module.exports  = app;