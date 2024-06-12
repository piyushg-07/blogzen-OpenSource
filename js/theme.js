let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
let navbar = document.getElementById("navbar");
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

// Function to toggle the theme and save preference to localStorage
themeBtn.addEventListener('click',function(){
    body.classList.toggle("darktheme");
    navbar.classList.toggle("darktheme");
    if(body.classList.contains("darktheme")){
        themeBtn.src ="assests/sun.png";
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.src ="assests/moon.png";
        localStorage.setItem('theme', 'light');
    }
    document.body.style.transition="1s";
});

// Check for saved theme preference on page load and apply it
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('darktheme');
        navbar.classList.add('darktheme');
        themeBtn.src = "assests/sun.png";
    } else {
        body.classList.remove('darktheme');
        navbar.classList.remove('darktheme');
        themeBtn.src = "assests/moon.png";
    }
});

// Function to toggle overlay display
function click() {
    const overlay = document.getElementById('overlay');
    console.log("Baby");
    overlay.style.display = overlay.style.display == "flex" ? "none" : "flex";
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
    overlay1.style.display = overlay1.style.display == "flex" ? "none" : "flex";
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
