// Remember account
// if (localStorage.getItem('loggedinAccount') === null && sessionStorage.getItem('loggedinAccount') === null) {
//     alert('No account is logged in')
//     window.location.assign('../login/index.html')
// }

// Create save action
function addCheckboxAction(event) {
    const checkboxElement = event.target,
        contentElement = event.target.parentElement.querySelector('.item-content')
    if (contentElement.style.textDecoration === '') {
        checkboxElement.setAttribute('checked', 'true')
        contentElement.style.textDecoration = 'line-through'
    } else {
        checkboxElement.setAttribute('checked', 'false')
        contentElement.style.textDecoration = ''
    }
}

// Create edit action
function addEditAction(event) {
    const todoContent = event.target.parentElement.querySelector('.item-content'),
        editButton = event.target.parentElement.querySelector('.edit-item-button')
        saveNewContent = document.createElement('button')
    
    todoContent.setAttribute('contenteditable', 'true')
    todoContent.focus()

    saveNewContent.classList.add('save-item-button', 'ti-save')
    editButton.replaceWith(saveNewContent)
    saveNewContent.onclick = function(event) {
        todoContent.setAttribute('contenteditable', 'false')
        event.target.replaceWith(editButton)
    }
}

// Create delete action
function addDeleteAction(event) {
    event.target.parentElement.parentElement.remove()
}

function setTaskToLocal(task) {
    let projectList = JSON.parse(localStorage.getItem('projectList'))

    projectList.taskList.push(task)

    localStorage.setItem('projectList', JSON.stringify(projectList))
}

function renderTask(task = 'ádfasdf') {
    const taskElement = document.createElement('li')
    const divElement = document.createElement('div')
    const taskCheckBox = document.createElement('input')
    const taskContent = document.createElement('p')
    const editTaskButton = document.createElement('button')
    const deleteTaskButton = document.createElement('button')
    const assginTaskButton = document.createElement('button')

    taskElement.classList.add('item')
    taskCheckBox.classList.add('item-checkbox')
    taskCheckBox.type = 'checkbox'
    taskContent.classList.add('item-content')
    editTaskButton.classList.add('edit-item-button', 'ti-pencil')
    deleteTaskButton.classList.add('delete-item-button')
    assginTaskButton.classList.add('assign-task-button', 'ti-plus')

    taskContent.innerHTML = task
    deleteTaskButton.innerHTML = '&times'

    taskCheckBox.addEventListener('click', addCheckboxAction)
    editTaskButton.addEventListener('click', addEditAction)
    deleteTaskButton.addEventListener('click', addDeleteAction)

    divElement.append(taskCheckBox, taskContent, editTaskButton, deleteTaskButton, assginTaskButton)
    taskElement.appendChild(divElement)
    return taskElement
}   

function renderAllValidTask(taskList) {

}

// Create add todo action
addTodoButton.addEventListener('click', function () {
    todoList.appendChild(renderTask(newTodoInput.value))
    newTodoInput.value = ''
    // Add event to new todolist
    // for (let i = 0 ; i < todoListItems.length ; ++i) {
    //     addItemAction(todoListItems[i])
    // }
})