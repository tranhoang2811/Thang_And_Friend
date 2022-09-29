function getUserFromLocal(username) {
    let user = localStorage.getItem('userKey');
    let data = JSON.parse(user);

    if (user === null) {
        return []
    } else if (fullname == data.fullname && email == data.email && password == data.password) {
        return true
    } else {
        return false
    }

}


function setUserToLocal(user) {
    let employeeList = localStorage.getItem('employeeList')
    
    if (employeeList === null) {
        employeeList = [];
    } else {
        employeeList = JSON.parse(employeeList);
    }

    employeeList.push(user)
    localStorage.setItem('employeeList', JSON.stringify(employeeList))
}

function isProjectAdmin(user) {

}

function isInProject(userID) {
    
}

function promote(user) {

}

function demote(user) {

}

function editProjectName(newName, projectID) {
    let projectList = localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')) : []

    for (let project of projectList)
        if (projectID === project.ID)
            project.name = newName

    localStorage.getItem('projectList', projectList)
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

    for (let project of projectList) {
        if (project.ID === random)
            return true
    }

    return false
}

function randomUserID() {
    let random = Math.floor(Math.random() * 10000)

    while (hadUserID(random)) {
        random = Math.floor(Math.random() * 10000)
    }
    
    return random
}

function hadUserID(random) {
    let employeeList = localStorage.getItem('employeeList') ? JSON.parse(localStorage.getItem('employeeList')) : []

    for (let employee of employeeList) {
        if (employee.ID = random)
            return true
    }

    return false
}