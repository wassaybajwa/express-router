const express = require('express');

const app = express();

const people = require('./routers/people');
const auth = require('./routers/auth')




app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)





app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})