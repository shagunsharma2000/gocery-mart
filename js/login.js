function validation() {
  
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;

  
  if (email === "" || password === "") {
    alert("Email and password cannot be empty. Please fill in all fields.");
    return;
  }

  
  var passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one special character and be 8 characters long.");
    return;
  }

  
  var userData = {
    email: email,
    password: password,
  };

 
  var userDataJSON = JSON.stringify(userData);

 
  localStorage.setItem("userData", userDataJSON);


  window.location.href = "dashboard.html";
}







