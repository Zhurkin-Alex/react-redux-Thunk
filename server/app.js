const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const addRouter = require('./routes/addRoutes')
const auth = require ('./routes/authRoutes')



app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/todo' , addRouter)
app.use('/auth', auth)

module.exports = app
