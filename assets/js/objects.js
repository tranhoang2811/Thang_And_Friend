const boss = {
    role: 'boss',
    username: 'boss@gmail.com',
    password: 'Boss123@'
}

class Employee {
    constructor(fullname, username, password) {
        this.ID = randomUserID()
        this.fullname = fullname
        this.username = username
        this.password = password
    }
}

class Project {
    constructor(name) {
        this.ID = randomProjectID()
        this.name = name
        this.adminIDs = []
        this.userIDs = []
        this.taskList = []
    }
}

class Task {
    constructor(name) {
        this.name = name
        this.adminIDs = []
        this.userIDs = []
    }
}