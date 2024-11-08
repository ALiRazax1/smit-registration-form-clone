let password;
let email;
let passwords = [];
let emails = [];
let reTypePasswordLabel = document.getElementById("re-enter-password-label");
let reTypePasswordInput = document.getElementById("re-enter-password");
let alertMessage = document.getElementById("alert")
let signupBtn = document.getElementById("signup");
let loginBtn = document.getElementById("login");
let signup = document.getElementById("signup-option");
let login = document.getElementById("login-option");
signupBtn.style.display = "none";
login.style.backgroundColor =  "#5eff0036";signup.style.backgroundColor = "#80808023";
reTypePasswordInput.style.display = "none" ;
reTypePasswordLabel.style.display = "none";

signup.addEventListener("click",()=>{loginBtn.style.display = "none";reTypePasswordInput.style.display = "block";reTypePasswordLabel.style.display = "block";signupBtn.style.display = "block";login.style.backgroundColor = "#80808023";signup.style.backgroundColor = "#5eff0036";alertMessage.innerText= ""})
login.addEventListener("click",()=>{signupBtn.style.display = "none";reTypePasswordInput.style.display = "none" ;reTypePasswordLabel.style.display = "none";loginBtn.style.display = "block";signup.style.backgroundColor =  "#80808023";login.style.backgroundColor = "#5eff0036";alertMessage.innerText = ""})
signupBtn.addEventListener("click", () => {
 let reTypePasswordInputValue = reTypePasswordInput.value
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("password").value;
  if (inputEmail !== "" && inputPassword !== "") {if(inputPassword === reTypePasswordInputValue){
    emails.push(inputEmail);
    passwords.push(inputPassword);
    alertMessage.innerText = "Account Created Successfully"
    alertMessage.style.color = "green"
  }else {alertMessage.innerText  = "Password Does Not Match";alertMessage.style.color = "red"}
    
  }
  else{alertMessage.style.color = "red"
    alertMessage.innerText = "Please fill all the fields"}
});

loginBtn.addEventListener("click", () => {
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("password").value;
  let indexNo;
  if (emails.includes(inputEmail)) {
    indexNo = emails.indexOf(inputEmail);
  }
  if (inputEmail == emails[indexNo] && inputPassword == passwords[indexNo]) {
    document.location.href = "./form.html";
  } else {
alertMessage.innerText = "Invalid email or password";
alertMessage.style.color = "red"    
  }
});
