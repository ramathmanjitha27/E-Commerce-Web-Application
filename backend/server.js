const express = require('express')
const mongoose = require('mongoose')

const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

require('dotenv').config();

const PORT = 8000;
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
