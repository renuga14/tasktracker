const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const connectDB = require('./src/db/db')
connectDB()

const tasksRouter = require('./src/routes/tasks.router')
app.use('/tasks', tasksRouter)

const { getInsights } = require('./src/services/insight.service')
app.get('/insights', getInsights)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
