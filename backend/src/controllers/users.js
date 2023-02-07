const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers()
    
        res.json({
            message: "GET all users success",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

}

const createUser = async (req, res) => {
    const {body} = req

    try {
        await usersModel.createUser(body)
        res.json({
            message: "Create user success",
            data: body
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

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
    createUser,
    updateUser,
    deleteUser
}