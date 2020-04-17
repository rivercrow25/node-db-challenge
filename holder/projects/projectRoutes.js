const express = require('express')
const db = require('./projects-helper')
const taskdb = require('../tasks/tasks-helper')

const router = express.Router()

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.get('/:id', (req, res) => {
    db.getProject(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
})

router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(() => {
            db.getProjects()
                .then(response => {
                    res.status(201).json(response)
                })
                .catch(error => {
                    res.status(500).json(error.message)
                })
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
})

router.post('/:id/tasks', (req, res) => {
    req.body.project_id = req.params.id
    taskdb.addTasks(req.body)
        .then(id => {
            res.status(201).json({ taskId: id })
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router