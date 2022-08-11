function closeMenu(){
    document.getElementsByClassName("Checkbox")[0].checked = false
}

const navBar = document.getElementsByTagName("nav")[0]
window.addEventListener("scroll", () => {
    if(window.scrollY === 0 && window.innerWidth >= 1000){
        navBar.style.backgroundColor = "#00000000"
    }else{
        navBar.style.backgroundColor = "#ffffff"
    }
})