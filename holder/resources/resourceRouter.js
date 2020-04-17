const express = require('express')
const db = require('./resource-helper')

const router = express.Router()

router.get('/', (req, res) => {
    db.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.get('/:id', (req, res) => {
    db.getResource(req.params.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/', (req, res) => {
    db.addResource(req.body)
        .then(id => {
            db.getResource(id)
                .then(resource => {
                    res.status(201).json(resource)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router