let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
themeBtn.addEventListener('click',function(){
    body.classList.toggle("darktheme");
    if(body.classList.contains("darktheme")){
        themeBtn.src ="assests/sunblack.png"
    }
    else{
        themeBtn.src ="assests/moon.png"
        document.body.style.transition="1s"
    }

})

function click() {
    const overlay = document.getElementById('overlay');
    console.log("Baby");
    overlay.style.display = overlay.style.display == "flex" ? "none": "flex";
  }
const loginButton = document.getElementById('loginButton');
const overlay = document.getElementById('overlay');

loginButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
  console.log("Hello");
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
function clickSignup() {
  const signupPopup = document.getElementById('signupPopup');
  signupPopup.style.display = 'flex';
}

const signupButton = document.getElementById('signup');
const signupForm = document.querySelector('.signupPopup .signup-form');
const signupFormButton = document.getElementById('signupFormButton');

// **Error handling and validation (optional but recommended):**
function validateSignupForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('errorMessage');

  if (!fullName || !email || !password || !confirmPassword) {
    errorMessage.textContent = 'All fields are required.';
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long.';
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return false;
  }

  errorMessage.textContent = '';
  return true;
}

signupButton.addEventListener('click', () => {
  // Toggle overlay display
  const signupPopup = document.getElementById('signupPopup');
  signupPopup.style.display = signupPopup.style.display === 'flex' ? 'none' : 'flex';

  // Clear any previous error messages
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = '';
});

signupFormButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (validateSignupForm()) {
    // Handle successful signup (e.g., send data to server, redirect)
    console.log('Signup successful! (Implement server-side logic)');
    const signupPopup = document.getElementById('signupPopup');
    signupPopup.style.display = 'none';
  }
});