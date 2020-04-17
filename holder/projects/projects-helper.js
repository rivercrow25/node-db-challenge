const db = require('../../data/db-config')

module.exports = {
    getProjects,
    addProject,
    getProject
}

function getProjects() {
    return db('projects')
}

function addProject(body) {
    return db('projects')
        .insert(body)
}

function getProject(id) {
    return db('projects')
        .where({ id })
}