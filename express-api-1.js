const express = require('express');
const app = express();
const { products } = require('./data.js')

app.get('/', (req,res) => {
   res.status(200).send(`<h1>Home Page</h1><a href="/api/products">Products</a>`)
})
app.get('/api/products', (req,res)=> {
    const newProducts = products.map(product => {
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts);
})



app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})