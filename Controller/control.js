const Users = require('../Schema/usersSchema.js')
const errorHandlerHelper = require('../Helper/errorHandlerHelper.js')
const asyncHandler = require('../Helper/asyncHandler.js')

const homePageController = asyncHandler(async (req, res) =>{
        res.send('This is a home page')
})

const displayData = asyncHandler(async (req, res, next) => {
        const users = await Users.find()
        if(!users){
            const message = 'No data are present'
            const error = errorHandlerHelper(message, 404)
            throw error
        }
        console.log(users)
        res.send("all the users' detail are displayed")
})

const insertData = asyncHandler(async (req,res,next) => {
        const newUser = await Users.create(req.body)
        console.log(newUser)
        res.send('new user added')
})

const displayDataById = asyncHandler(async (req,res,next) => {
         const user = await Users.findById(req.params.id)
         if(!user) {
            const message = `user with ${req.params.id} is not found.`
            const error = new errorHandlerHelper(message, 404)
            throw error
         }
         console.log(user)
         res.send(`the person with ${req.params.id} exists.`)
})

const errorHandler = asyncHandler(async (req,res,next) => {
        const message = 'The page you are looking for doesnot exist'
        const error = new errorHandlerHelper(message, 404)
        throw error
})

module.exports = {
    homePageController,
    displayData,
    insertData,
    displayDataById,
    errorHandler
}