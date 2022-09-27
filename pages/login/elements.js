const loginForm = document.getElementById('login-form')

// Select email container and item
const emailContainer = document.querySelector('.email-container'),
    emailInput = document.querySelector('.email-container input')

// Select password container and item
const passwordContainer = document.querySelector('.password-container'),
    passwordInput = document.querySelector('.password-container input')

// Creata error element
const loginError = document.createElement('p')
loginError.classList.add('login-error')

// Get remember checkbox
const remmerberAccountCheckbox = document.getElementById('remember')