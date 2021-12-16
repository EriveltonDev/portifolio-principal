export default class animaScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
    }

    animaScroll() {
        const windowMetade = window.innerHeight * 0.6;
        this.sections.forEach(section => {
            const sectiontop = section.getBoundingClientRect().top - windowMetade;
            if(sectiontop < 0) {
                section.classList.add('ativo')
            } else if (sectiontop > 0) {
                section.classList.remove('ativo')
            }
        })
    }

    evento() {
        window.addEventListener('scroll', this.animaScroll);
    }

    bind() {
        this.animaScroll = this.animaScroll.bind(this);
    }

    init() {
        this.bind()
        this.evento();
        this.animaScroll();
        return this;
    }
}