function getUserFromLocal(username) {

}

function setUserToLocal(user) {

}

function isProjectAdmin(user) {

}

function isInProject(userID) {
    
}

function promote(user) {

}

function demote(user) {

}

function addProject(name) {
    let projectList = localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')) : []

    let newProject = new Project(name)
    newProject.ID = randomProjectID()

    projectList.push(newProject)
    localStorage.getItem('projectList', projectList)
} 

function deleteProject(inputID) {
    let projectList = JSON.parse(localStorage.getItem('projectList'))

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].ID == inputID)
            projectList.splice(i, 1)
    }

    localStorage.getItem('projectList', projectList)
} 

function randomProjectID() {
    let random = Math.floor(Math.random() * 1000)
    
    while (hasProjectID(random)) {
        random = Math.floor(Math.random() * 1000)
    }
    
    return random
}

function hadProjectID(random) {
    let projectList = localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')) : []

    for (let projectID of projectList) {
        if (projectID === random)
            return true
    }
    return false
}