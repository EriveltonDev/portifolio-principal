    import menuBtn from "./menu.js";
    import animaScroll from "./animacaoScroll.js";

    const menuMobile = new menuBtn('#btn-mobile', '#men', '#nave');
    menuMobile.init();

    const animacaoScroll = new animaScroll(".js-scroll");
    animacaoScroll.init();