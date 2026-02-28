function toggleDarkMode() {
window.matchMedia('(prefers-color-scheme: dark)').matches ? document.body.classList.add('dark-mode') && document.body.classList.remove('light-mode'): document.body.classList.add('light-mode') && document.body.classList.remove("dark-mode"); // Check the user's preferred color scheme and apply the appropriate class to the body element
}
localStorage.getItem("theme","light")
toggleDarkMode();
//check karega dark mode activate hai ya nhi hai to laga dega nhi toh light mode activate kar dega
// now we want that if i chnage the system theme then it should automatically change the theme of the website as well
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",function(){
    toggleDarkMode();
})
let btn = document.querySelector("#toggle-theme");
btn.addEventListener("click",function(){
    document.body.classList.contains("dark-mode")?document.body.classList.remove("dark-mode")&&document.body.classList.add("light-mode") && localStorage.setItem("theme","light"):document.body.classList.add("dark-mode")&&doocument.body.classlist.remove("light-mode") && localStorage.setItem("theme","dark");
})

  // now the problem is ki ham last mein jis theme ke sath band kare tab ko us theme ke sa t hi vapas open ho - for this we use local storage 
