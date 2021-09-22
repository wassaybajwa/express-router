const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})







app.all('*', (req,res) => {
    res.status(404).send('Resource not found')
})


app.listen(3001, () => {
    console.log('Server is running on port 3001....')
})