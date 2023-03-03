require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const giftRoutes = require('./routes/gifts')
const groupRoutes = require('./routes/groups')
const userRoutes = require('./routes/user')
var cors = require('cors');

const app = express()


app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.static(__dirname + '/public'));
app.use('/api/gifts', giftRoutes)
app.use('/api/groups', groupRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })