const getAllUsers = (req, res) => {
    const data = {
        "id" : "1",
        "name" : "Imam Ramadhan",
        "email" : "imam@gmail.com",
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

const updateUser = (req, res) => {
    const { id } = req.params
    console.log('id user: ', id)
    res.json({
        message: "Update user success",
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params
    console.log('id user: ', id)
    res.json({
        message: "Delete user success",
        data: {
            id: id,
            name: "imam ramadhan",
            email: "imam@gmail.com"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}