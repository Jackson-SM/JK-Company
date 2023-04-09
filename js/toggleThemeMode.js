const buttonSwitch = document.querySelector('.switch');

const themeInLocalStorage = localStorage.getItem('theme-mode');

let theme = "light";

const classListHTMLElement = document.documentElement.classList;
function setThemeInLocalStorage(){
  localStorage.setItem("theme-mode", theme)
}

function toggleDarkModeTheme() {
  theme = theme === "light" ? "dark" : "light";
  classListHTMLElement.toggle("light")
  classListHTMLElement.toggle("dark")
  setThemeInLocalStorage();
}

function verifyThemeInLocalStorage(){
  if(themeInLocalStorage === "dark"){
    classListHTMLElement.add("dark")
    classListHTMLElement.remove("light")
    theme = "dark"
  }else {
    classListHTMLElement.add("light")
    classListHTMLElement.remove("dark")
    theme = "light"
  }
}
verifyThemeInLocalStorage()


buttonSwitch.addEventListener('click', () => {
  toggleDarkModeTheme()
})