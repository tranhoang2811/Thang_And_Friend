const employeeList = []

function setUserToLocal() {

    const userInformation = {
        fullname : fullnameInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    }

    employeeList.push(userInformation);
    localStorage.setItem('userKey', JSON.stringify(employeeList))
}

function getUserFromLocal() {
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

function isProjectAdmin(user) {

}

function isInProject(userID) {
    
}

function promote(user) {

}

function demote(user) {

}

function addProject(name) {

} 

function deleteProject(inputID) {
    let projectList = JSON.parse(localStorage.getItem('projectList'))

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].ID == inputID)
            projectList.splice(i, 1)
    }

    localStorage.getItem('projectList', projectList)
} 