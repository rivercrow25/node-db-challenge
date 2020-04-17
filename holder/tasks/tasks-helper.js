const db = require('../../data/db-config')

module.exports = {
    getTasks,
    addTasks
}

function getTasks() {
    return db('tasks')
        .select('tasks.description as taskDescription', 'projects.name as project', 'projects.description')
        .join('projects', 'tasks.project_id', 'projects.id')
}

function addTasks(body) {
    return db('tasks')
        .insert(body)
}