if (localStorage.getItem('loggedinAccount') === null && sessionStorage.getItem('loggedinAccount') === null) {
    alert('No account is logged in')
    window.location.assign('../login/index.html')
}

let projectList = localStorage.getItem('projectList')
projectList = projectList ? JSON.parse(projectList) : []
renderAllProject(projectList)

function accessToProject(event) {
    const currentAccessProject = event.target.attributes.data
    sessionStorage.setItem('currentAccessProject', JSON.stringify(currentAccessProject))
    window.location.assign('../project-tasks/index.html')
}

function setProjectToLocal(project) {
    let projectList = localStorage.getItem('projectList')
    projectList = projectList ? JSON.parse(projectList) : []
    projectList.push(project)
    localStorage.setItem('projectList', JSON.stringify(projectList))
}

function renderProject(project) {
    const projectItemElement = document.createElement('div')
    const projectNameElement = document.createElement('p')
    projectItemElement.classList.add('project-item')
    projectNameElement.classList.add('project-name')
    projectNameElement.innerHTML = project.name
    projectNameElement.attributes.data = project
    projectNameElement.addEventListener('click', accessToProject)
    projectItemElement.appendChild(projectNameElement)
    return projectItemElement
}

function renderAllProject(projectList) {
    projectList.forEach(project => {
        projectContainerElement.appendChild(renderProject(project))
    })
}

function createNewProject() {
    const name = projectNameInputElement.value
    if (name === '') {
        alert('Project name is empty')
    } else {
        const project = new Project(name)
        const projectElement = renderProject(project)
        projectNameInputElement.value = ''
        projectContainerElement.appendChild(projectElement)
        setProjectToLocal(project)
    }
}

function logout() {
    sessionStorage.removeItem('loggedinAccount')
    localStorage.removeItem('loggedinAccount')
    window.location.assign('../login/index.html')
}

createProjectButtonElement.addEventListener('click', createNewProject)
logoutButtonElement.addEventListener('click', logout)

function addUserToProject(userID) {
    let employees = (localStorage.getItem("employeeList") ? JSON.parse(localStorage.getItem("employeeList")) : null)
    
    if (!employees) {
        return "No employee"
    }
    
    let projectList =  JSON.parse(localStorage.getItem("projectList"))
    let currentAccessProject =  JSON.parse(sessionStorage.getItem("currentAccessProject"))

    let checkUserInProject = currentAccessProject.includes(userID)

    if (!checkUserInProject) {
        currentAccessProject.userIDs.push(userIDs)
    }

    projectList.userIDs = currentAccessProject.userIDs

    localStorage.setItem("projectList", JSON.stringify(projectList))
    sessionStorage.setItem("projectList", JSON.stringify(currentAccessProject))
}

function deleteUserFromProject(userID) {
    let employees = (localStorage.getItem("employeeList") ? JSON.parse(localStorage.getItem("employeeList")) : null)
    
    if (!employees) {
        return "No employee"
    }
    
    let projectList =  JSON.parse(localStorage.getItem("projectList"))
    let accessProject =  JSON.parse(sessionStorage.getItem("currentAccessProject"))

    let currentUserInProject = accessProject.indexOf(userID)

    let currentAccessProject = []
    if (checkUserInProject != -1) {
        currentAccessProject = accessProject.slice(0, currentUserInProject).concat(accessProject.slice(currentUserInProject+1))
    }

    projectList.userIDs = currentAccessProject.userIDs

    localStorage.setItem("projectList", JSON.stringify(projectList))
    sessionStorage.setItem("projectList", JSON.stringify(currentAccessProject))
}