const express = require('express')
const mongoose = require('mongoose')

const app = express();
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection success')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
