// Set email, password after sign up
if (sessionStorage.getItem("currentEmployeeSignUp") !== null) {
  const employee = JSON.parse(sessionStorage.getItem("currentEmployeeSignUp"));
  emailInput.value = employee.username;
  passwordInput.value = employee.password;
}

// Direct to todo list if user has logged in
if (localStorage.getItem("loggedinAccount") !== null) {
  window.location.assign("../workspace/index.html");
}

// Validate email
function validateEmail(emailElement) {
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegEx.test(emailElement.value)) {
    return true;
  }
  loginError.innerHTML = "Invalid Email!";
  emailContainer.appendChild(loginError);
  return false;
}

// Validate password
function validatePassword(passwordElement) {
  let passwordRegEx = /[A-Z]\w{6,}[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (passwordRegEx.test(passwordElement.value)) {
    return true;
  }
  loginError.innerHTML = "Invalid Password!";
  passwordContainer.appendChild(loginError);
  return false;
}

// Remember user account
function rememberAccountHandle(employee) {
  if (rememberAccountCheckbox.checked) {
    localStorage.setItem("loggedinAccount", JSON.stringify(employee));
  }
  sessionStorage.setItem("loggedinAccount", JSON.stringify(employee));
}

// Validate account
function validateEmployeeAccount(email, password) {
  const employeeList = localStorage.getItem("employeeList");
  if (employeeList === null) {
    loginError.innerHTML = "No accounts are registered yet";
    loginError.style.textAlign = "center";
    loginForm.appendChild(loginError);
    return false;
  }
  const employee = JSON.parse(employeeList).find(
    (employee) => employee.username === email && employee.password === password
  );
  if (employee === undefined) {
    loginError.innerHTML = "Account not found";
    loginError.style.textAlign = "center";
    loginForm.appendChild(loginError);
    return false;
  }
  rememberAccountHandle(employee);
  return true;
}

function loginHandle() {
  const loginFormat =
    validateEmail(emailInput) && validatePassword(passwordInput);
  if (
    loginFormat &&
    validateEmployeeAccount(emailInput.value, passwordInput.value)
  ) {
    window.location.assign("../workspace/index.html");
  }
}

loginButton.addEventListener("click", loginHandle);

// Remove error
emailInput.addEventListener("focus", () => {
  loginError.remove();
});
passwordInput.addEventListener("focus", () => {
  loginError.remove();
});
