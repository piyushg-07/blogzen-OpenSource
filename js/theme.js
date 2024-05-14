let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
let menu_icon = document.getElementById("menu-icon");

themeBtn.addEventListener('click',function(){
    body.classList.toggle("darktheme");
    menu_icon.style.color = "black";
    if(body.classList.contains("darktheme")){
        themeBtn.src ="assests/sunblack.png"
    }
    else{
        themeBtn.src ="assests/moon.png"
        document.body.style.transition="1s"
    }
})

function menucng() {
  let menucontainer = document.querySelector(".menu-container");
  let menuoverlay = document.querySelector(".menu-overlay");
  let section1 = document.querySelector(".sec1");
  console.log("kiran");
  console.log(menucontainer)
  menucontainer.style.display = menucontainer.style.display == "flex" ? "none":"flex";
  menuoverlay.style.display =  menuoverlay.style.display == "block" ? "none":"block";
  section1.style.margin = section1.style.margin == "20px 0 0 0 " ? "100px 0 0 0":"20px 0 0 0";
  menu_icon.classList = menu_icon.classList == "bx bx-menu" ?"bx bx-x":"bx bx-menu";
}

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