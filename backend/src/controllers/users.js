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
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await usersModel.updateUser(body, id)
        res.json({
            message: "Update user success",
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        await usersModel.deleteUser(id)
        res.json({
            message: "Delete user success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}