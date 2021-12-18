const botao = document.querySelector('button');
const buscador = document.querySelector('#buscador');
const logradouro = document.querySelector('#logradouro');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const UF = document.querySelector('#uf');

buscador.addEventListener('keyup', atualizarCEP);

function atualizarCEP() {
    const atualizado = buscador.value.replace(/(\d{5})(\d{3})/g, '$1-$2');
    buscador.value = atualizado;
}

botao.addEventListener('click', () => {
    if (buscador.value.length === 9) {
    puxarCEP(buscador.value)
    } else {
        window.alert('CEP inválido');
        clear();
    }
});

function clear() {
    buscador.value = '';
    logradouro.value = '';
    complemento.value = '';
    bairro.value = '';
    localidade.value = '';
    UF.value = '';
}

function puxarCEP(numCEP) {
    const cep = fetch('https://viacep.com.br/ws/' + numCEP + '/json/');

    cep.then(r => r.json())
    .then(body => {
        if (body.logradouro != undefined) {
            logradouro.value = body.logradouro;
            complemento.value = body.complemento;
            bairro.value = body.bairro;
            localidade.value = body.localidade;
            UF.value = body.uf;
        } else {
            window.alert('Endereço não encontrado ou não existe');
            clear();
        }
    })
}
