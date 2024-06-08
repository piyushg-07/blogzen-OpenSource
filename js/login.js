function loginWithEmail() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
  
    if (validateEmail(email) && validatePassword(password)) {
      // Mock login validation
      if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Please enter a valid email and password.");
    }
  }
  
  function loginWithGoogle() {
    // Mock Google login
    alert("Google login functionality is currently not available.");
  }
  
  function loginWithFacebook() {
    // Mock Facebook login
    alert("Facebook login functionality is currently not available.");
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    // Simple length check
    return password.length >= 6;
  }
  