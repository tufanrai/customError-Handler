const express = require('express')
const router = require('../Error-Handler/Router/routs.js')
const DatabaseConnection = require('../Error-Handler/Database/dbconnection.js')

const app = express()
DatabaseConnection(/* database url */)

app.use(express.urlencoded())
app.use('/', router)

app.listen(8000, () => console.log('server started at http://localhost:8000'))