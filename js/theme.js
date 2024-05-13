let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
let menu_icon = document.getElementsByClassName("menu");

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
  let menuoverlay = document.getElementsByClassName("menu-overlay");
  let menucontainer = document.getElementsByClassName("menu-container");
  console.log("kiran");
  menuoverlay.style.display = menuoverlay.style.display == "none" ? "block":"none";
  menucontainer.style.display = menucontainer.style.display == "none" ? "flex": "none";
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