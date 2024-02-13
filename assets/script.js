var valid1 = 0;
var valid2 = 0;
function valorSenha(tamanho) {
    document.querySelector('#tamanhoSenha').innerHTML = tamanho;
    if(valid1 !== 0 && valid2 !== 0){
        gerarSenha();
    }else{
        valid1 = 1;
    }
}

function gerarSenha() {
    var tamSenha = document.querySelector('#inputRange').value

    var minusculas = document.querySelector('#min').checked;
    var maiusculas = document.querySelector('#mai').checked;
    var numeros = document.querySelector('#num').checked;
    var caracteres = document.querySelector('#car').checked;

    var variedade = '';

    if (minusculas) {
        variedade += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (maiusculas) {
        variedade += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numeros) {
        variedade += '0123456789';
    }
    if (caracteres) {
        variedade += '.-_!@#$&';
    }

    var novaSenha = '';
    for (let i = 0; i < tamSenha; i++) {
        novaSenha += variedade.charAt(Math.floor(Math.random() * variedade.length));
    }

    var senha = document.querySelector('#senha');
    senha.textContent = novaSenha;

    var contentSenha = document.querySelector('#contentSenha');
    contentSenha.classList.remove('hide');

    valid2 = 1;
}




