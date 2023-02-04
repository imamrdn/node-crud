const getAllUsers = (req, res) => {
    const data = {
        "name" : "Imam Ramadhan",
        "email" : "imam@gmail.com",
        "password" : "123456",
        "confirmPassword" : "123456"
    }

    res.json({
        message: "GET all users success",
        data : data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: "POST all users success",
        data: req.body
    })
}

module.exports = {
    getAllUsers,
    createNewUser
}