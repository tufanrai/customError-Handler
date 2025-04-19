const Users = require('../Schema/usersSchema.js')
const errorHandlerHelper = require('../Helper/errorHandlerHelper.js')

const homePageController = async (req, res) =>{
    try{
        res.send('This is a home page')
    } catch(error) {
        console.log(error)
    }
}

const displayData = async (req, res, next) => {
    try{
        const users = await Users.find()
        if(!users){
            const message = 'No data are present'
            const error = errorHandlerHelper(message, 404)
            throw error
        }
        console.log(users)
        res.send("all the users' detail are displayed")

    } catch (error) {
        next(error)
    }
}

const insertData = async (req,res,next) => {
    try{
        const newUser = await Users.create(req.body)
        console.log(newUser)
        res.send('new user added')
    } catch (error) {
        next(error)
    }
}

const displayDataById = async (req,res,next) => {
    try{
         const user = await Users.findById(req.params.id)
         if(!user) {
            const message = `user with ${req.params.id} is not found.`
            const error = new errorHandlerHelper(message, 404)
            throw error
         }
         console.log(user)
         res.send(`the person with ${req.params.id} exists.`)
    } catch (error) {
        next(error)
    }
}

const errorHandler = async (req,res,next) => {
    try{
        const message = 'The page you are looking for doesnot exist'
        const error = new errorHandlerHelper(message, 404)
        throw error
    } catch (error) {
        next(error)
    }
}

module.exports = {
    homePageController,
    displayData,
    insertData,
    displayDataById,
    errorHandler
}