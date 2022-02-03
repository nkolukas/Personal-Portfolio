const boton = document.querySelector('.nav-toggle')
const openMenu= document.querySelector('.nav-menu')
// const items= document.querySelector('.nav-menu-link')


// Add event listener
boton.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})

// items.addEventListener('click', ()=>{
//     openMenu.classList.toggle('nav-menu_visible');
// })