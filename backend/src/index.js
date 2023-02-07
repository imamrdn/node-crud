require('dotenv').config()

const PORT = process.env.PORT || 5000
const express = require('express')
const users = require('./routes/users')
const middlewareLogRequest = require('./middlewares/logs')

const app = express()

app.use(middlewareLogRequest)
app.use(express.json())

//app.method(path, handler)
app.use('/users', users)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})