document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform validation (you can customize this according to your requirements)
    if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Check if user already exists in localStorage
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = existingUsers.some(function(user) {
      return user.username === username || user.email === email;
    });
  
    if (userExists) {
      alert('User already exists. Please choose a different username or email.');
      return;
    }
  
    // If user doesn't exist, add them to localStorage
    var newUser = { username: username, email: email };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Optionally, you can redirect the user to another page after successful signup
    // window.location.href = 'success.html';
  });
  