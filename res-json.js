const express = require('express');
const app = express();
const { products } = require('./data.js')

app.get('/', (req,res) => {
   res.status(200).json(products)
})




app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})