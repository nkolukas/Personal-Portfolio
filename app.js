const boton = document.querySelector('.nav-toggle')
const openMenu= document.querySelector('.nav-menu')
const item1= document.querySelector('.item1')
const item2= document.querySelector('.item2')
const item3= document.querySelector('.item3')


// Add event listener
boton.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})

item1.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})

item2.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})

item3.addEventListener('click', ()=>{
    openMenu.classList.toggle('nav-menu_visible');

    if(openMenu.classList.contains('nav-menu_visible')){
        openMenu.setAttribute('aria-label', 'Cerrar menú');
    } else {
        openMenu.setAttribute('aria-label', 'Abrir menú')
    }
})