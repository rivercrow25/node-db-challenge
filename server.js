const express = require('express')
const projectsRouter = require('./holder/projects/projectRoutes')
const resourceRouter = require('./holder/resources/resourceRouter')
const tasksRouter = require('./holder/tasks/tasksrouter')
const server = express()

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', tasksRouter)

module.exports = server