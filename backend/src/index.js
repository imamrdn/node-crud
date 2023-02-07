const express = require('express')
const users = require('./routes/users')
const middlewareLogRequest = require('./middlewares/logs')

const app = express()

app.use(middlewareLogRequest)
app.use(express.json())

//app.method(path, handler)
app.use('/users', users)

app.use('/', (req, res) => {
    dbPool.execute('SELECT * FROM users', (err, rows) => {
        if(err) {
            res.json({
                message: 'Connection failed'
            })
        }

        res.json({
            message: 'Connection success',
            data: rows
        })
    })
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})