const botao = document.querySelector('button');
const buscador = document.querySelector('#buscador');
const logradouro = document.querySelector('#logradouro');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const UF = document.querySelector('#uf');

botao.addEventListener('click', () => {
    puxarCEP(buscador.value)
});


function puxarCEP(numCEP) {
    const cep = fetch('https://viacep.com.br/ws/' + numCEP + '/json/');

    cep.then(r => r.json())
    .then(body => {
        console.log(body)
        logradouro.value = body.logradouro;
        complemento.value = body.complemento;
        bairro.value = body.bairro;
        localidade.value = body.localidade;
        UF.value = body.uf;
    })
}
