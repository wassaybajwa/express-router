const express = require('express');
const router = require('./people');
const app = express.Router();

app.post('/', (req,res) => {
    //    console.log(req.body)
        const {name} = req.body;
        if(name){
            return res.status(200).send(`Welcome ${name}`)
        }
        res.status(401).send('Please provide Credentials')
    })
    
module.exports = router