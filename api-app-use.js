const express = require('express');
const app = express();
const logger = require('./logger')

app.use('/api',logger)

app.get('/',(req, res) => {
   
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products',(req, res) => {
   
    res.send('Products')
})

app.get('/api/Items', (req, res) => {
    res.send('Items')
})







app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})