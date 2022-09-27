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