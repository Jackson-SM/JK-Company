const switchTheme = document.querySelector('.switch');

function verifyThemeAndSetInSwitch(){
  if(themeInLocalStorage === "dark"){
    switchTheme.classList.add("dark")
  }
}

window.onload = function(){
  verifyThemeAndSetInSwitch()
}

switchTheme.addEventListener('click', (event) => {
  event.target.classList.toggle("dark");
})