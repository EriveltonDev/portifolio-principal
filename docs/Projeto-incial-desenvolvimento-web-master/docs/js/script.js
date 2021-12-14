const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const menuPrincipal = document.getElementById('menu-principal');
    menuPrincipal.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function fecharMenu() {
    const menuPrincipal = document.getElementById('menu-principal');
    menuPrincipal.classList.toggle('active');
}
