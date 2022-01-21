const boton = document.querySelector('.nav-toggle');
const openMenu= document.querySelector('.nav-menu')


// Add event listener
boton.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})