require('./database/connection')
require('dotenv').config()

const index = require('./routes/index.routes');
require('../utils/dependency');


const express = require('express')
const app = express()

app.use(express.json())
app.use(index);

module.exports = app