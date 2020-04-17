const db = require('../../data/db-config')

module.exports = {
    getResources,
    getResource,
    addResource
}

function getResources() {
    return db('resources')
}

function getResource(id) {
    return db('resources')
        .where({ id })
}

function addResource(body) {
    return db('resources')
        .insert(body)
}