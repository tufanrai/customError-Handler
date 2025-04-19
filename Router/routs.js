const express = require('express')
const { homePageController, displayData, insertData, displayDataById, errorHandler} = require('../Controller/control.js')
const router = express.Router()

router.get('/', homePageController)
router.get('/user', displayData)
router.post('/user', insertData)
router.get('/user/:id', displayDataById)
router.get('/*e', errorHandler)

module.exports = router