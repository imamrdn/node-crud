const logReguest = (req, res, next) => {
    console.log('request on PATH: ', req.path)
    next()
}

module.exports = logReguest