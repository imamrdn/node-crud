const express = require('express')

const app = express()

//routing
//app.method(path, handler)
app.use('/', (req, res, next) => {
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server success running on port 5000')
})