// Get submit button
const submitButton = document.querySelector(".submit-information input");

// Get fullname input
const fullnameInputContainer = document.querySelector(".fullname-input"),
  fullnameInput = document.querySelector(".fullname-input input");

// Get email input
const emailInputContainer = document.querySelector(".email-input"),
  emailInput = document.querySelector(".email-input input");

// Get password input
const passwordInputContainer = document.querySelector(".password-input"),
  passwordInput = document.querySelector(".password-input input");

// Get gender input
const genderInputContainer = document.querySelector(".gender-input");

// Get age input
const ageInputContainer = document.querySelector(".age-input"),
  ageInput = document.querySelector(".age-input input");

// Create error element
const signupError = document.createElement("p");
signupError.classList.add("sign-up-error");

// Get information list
const informationList = document.querySelector(".sign-up__description");
