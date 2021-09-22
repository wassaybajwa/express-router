const express = require('express');

const app = express();
const {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req,res) =>{
    res.status(200).json({success:true, data:people})
})

app.post('/login', (req,res) => {
//    console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provide Credentials')
})





app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})