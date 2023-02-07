const express = require('express')
const users = require('./routes/users')
const middlewareLogRequest = require('./middlewares/logs')

const app = express()

app.use(middlewareLogRequest)
app.use(express.json())

//app.method(path, handler)
app.use('/users', users)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})