export default class menuBtn {
    constructor(botao, menu, navBar) {
        this.botao = document.querySelector(botao);
        this.menu = document.querySelector(menu);
        this.navBar = document.querySelector(navBar);
    }

    menuBurger(event) {
            if(event.type === 'touchstart') event.preventDefault();
            this.navBar.classList.toggle('ativo');
    }

    event() {
        this.botao.addEventListener('click', this.menuBurger, {passive: false});
        this.botao.addEventListener('touchstart', this.menuBurger, {passive: false}); 
        this.menu.addEventListener('click', this.menuBurger);
    }

    bind() {
        this.menuBurger = this.menuBurger.bind(this);
    }

    init() {
        this.bind()
        this.event()
        return this;
    }
}