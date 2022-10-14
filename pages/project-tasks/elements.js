// Get add new todo part
const newTodoInput = document.querySelector('.item-input'),
    addTodoButton = document.querySelector('.add-item-button')

// Get todo list
const todoList = document.querySelector('.items-container .items-list'),
    todoListItems = todoList.children

// Get user avatar
const userAvatar = document.querySelector('.user-account img')

const idInputElement = document.querySelector('.action-bar .id-input')
const promoteButtonElement = document.querySelector('.action-bar .promote')
const demoteButtonElement = document.querySelector('.action-bar .demote')
const addToProjectButtonElement = document.querySelector('.action-bar .add-to-project')
const deleteFromProjectButtonElement = document.querySelector('.action-bar .delete-from-project')