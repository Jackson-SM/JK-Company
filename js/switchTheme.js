const switchTheme = document.querySelector('.switch');

function verifyThemeAndSetInSwitch(){
  if(themeInLocalStorage === "dark"){
    switchTheme.classList.add("dark")
  }
}
verifyThemeAndSetInSwitch()

switchTheme.addEventListener('click', (event) => {
  event.target.classList.toggle("dark");
})