    const sections = document.querySelectorAll(".js-scroll");
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll() {
        sections.forEach(section => {
            const sectiontop = section.getBoundingClientRect().top - windowMetade;
            if(sectiontop < 0) {
                section.classList.add('ativo')
            }
        })
    }

    window.addEventListener('scroll', animaScroll);

    const menuHamburguer = document.getElementById('btn-mobile');

    function menuBurger(event) {
        if(event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nave')
        nav.classList.toggle('ativo');
    }


    menuHamburguer.addEventListener('click', menuBurger);
    menuHamburguer.addEventListener('touchstart', menuBurger);

    const fechaMenu = document.getElementById('men');
    fechaMenu.addEventListener('click', menuBurger)


    