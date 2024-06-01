let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const calendarContainer = document.querySelector('.calendar');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }
    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
};

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();


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

function click() {
  const overlay1 = document.getElementById('overlay1');
  console.log("Baby");
  overlay1.style.display = overlay1.style.display == "flex" ? "none": "flex";
}
const Calender = document.getElementById('Calender');
const overlay1 = document.getElementById('overlay1');

Calender.addEventListener('click', () => {
overlay1.style.display = 'flex';
console.log("Hello");
});

overlay1.addEventListener('click', (event) => {
if (event.target === overlay1) {
  overlay1.style.display = 'none';
}
});


function validateEmail(email) {
  const emailPattern = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}

const emailInput = document.getElementById("emailId");
const errorSpan = document.getElementById("emailError");

// Function to update error message based on email input validity
function updateErrorMessage() {
    if (!emailInput.validity.valid) {
        errorSpan.textContent = "Please enter a valid email address."; // Set error message
    } else {
        errorSpan.textContent = ""; // Clear error message
    }
}

// Add event listener to submit button to check email validity and update error message
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
  const isValidEmail = validateEmail(emailInput.value);
  if (!isValidEmail) {
    errorSpan.textContent = "Please enter a valid email address."; // Set error message
    event.preventDefault(); // Prevent the form from submitting
  }
});

// Add event listener to email input field to clear error message when user starts re-entering email
emailInput.addEventListener("input", function() {
    errorSpan.textContent = ""; // Clear error message
});
