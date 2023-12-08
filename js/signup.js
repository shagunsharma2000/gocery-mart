function shag() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;

  
  if (!name || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  
  var passwordRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one special character");
    return;
  }

  
  var userData = {
    name: name,
    email: email,
    password: password
  };


  if (typeof Storage !== "undefined") {
 
    var users = JSON.parse(localStorage.getItem("users")) || [];

    
    if (users.some(user => user.email === email)) {
      alert("Email is already registered");
      return;
    }

   
    users.push(userData);

   
    localStorage.setItem("users", JSON.stringify(users));

    
    alert("Registration successful");

    
    document.getElementById("name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";

    
    window.location.replace("dashboard.html");
  } else {
    
   
  }
}