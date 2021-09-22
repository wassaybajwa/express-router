const { response } = require('express');
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
app.get('/api/products/:productID', (req,res)=> {
    const {productID} = req.params;
//    console.log(productID)

    const singleProduct = products.find((product) => product.id === Number(productID))
//    console.log(req.params)
//    console.log(product)
//    console.log(product.id)
//    console.log(singleProduct)
    if(!singleProduct){
        return res.status(404).send('Product does not exists')
    }else{
        res.json(singleProduct);
    }
    
    
    
})

app.get('/api/products/:productID/reviews/reviewID', (req,res) => {
    console.log(req.params)
    res.send('Thanks for your review')
})

app.get('/api/v1/query', (req,res) => {
//    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
//        response.status(200).send('Product does not exist')
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
//    res.send('Thanks for your review')
})


app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})