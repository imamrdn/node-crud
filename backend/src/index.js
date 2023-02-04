const express = require('express')
const usersRouters = require('./routes/users')

const app = express()

//app.method(path, handler)
app.use('/users', usersRouters)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})