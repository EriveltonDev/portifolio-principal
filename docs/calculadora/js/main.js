const botoes = document.querySelectorAll('button');
const display = document.querySelector('p');
const clear = document.querySelector('.clear');

function puxarTexto(event) {
    if (event.target.innerHTML === 'C' ) {
        limpar();
    } else if (event.target.id === "apagar" ) {
        backspace();
    } else if (event.target.innerHTML === '=') {
        calcular();
    } else {
        console.log(event.target)
        display.innerHTML += event.target.innerHTML;
    }
}

function calcular() {
    const resultado = display.innerHTML;
    if (resultado) {
        display.innerHTML = eval(resultado);
    } else {
        window.alert('Não há nada para calcular!')
    }
}

function backspace() {
    const conteudo = display.innerHTML;
    display.innerHTML = conteudo.substring(0, conteudo.length -1);
    
}

function limpar() {
    display.innerHTML = "";
}


botoes.forEach(botao => {
    botao.addEventListener('click', puxarTexto);
})