document.querySelector(".fade-layer").addEventListener("click",showMenu)


document.querySelector(".menu-button").addEventListener("click",showMenu)



function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

const menu = document.querySelector('.menu-button');
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true
    } else {
        menu.classList.remove('open');
        menuOpen = false;
    }
});