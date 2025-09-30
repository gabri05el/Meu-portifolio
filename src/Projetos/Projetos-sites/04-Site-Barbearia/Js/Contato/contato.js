const contato = document.getElementById("contato");
const nome = document.getElementById("contato--dados-nome");
const assunto = document.getElementById("contato--dados-assunto");
const celular = document.getElementById("contato--dados-celular");
const email = document.getElementById("contato--dados-email");

contato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDoInputs();
});

function checagemDoInputs() {
    const valorDeNome = nome.value.trim();
    const valorDeAssunto = assunto.value.trim();
    const valorDeCelular = celular.value.trim();
    const valorDeEmail = email.value.trim();
    if(valorDeNome === "") {
        erroNaValidacao(nome, "Por favor preencha esse campo");
    }else if(valorDeNome.length < 3) {
        erroNaValidacao(nome, "Esse campo nessecita ter no minímo 3 letras");
    }else {
        certaValidacao(nome);
    }
    if(valorDeCelular === "") {
        erroNaValidacao(celular, "Por favor preencha esse campo");
    }else if(valorDeCelular.length < 11) {
        erroNaValidacao(celular, "Esse campo nessecita ter no minímo 11 números");
    }else if(valorDeCelular.length > 13) {
        erroNaValidacao(celular, "Esse campo nessecita ter no maxímo 13 números");
    }else {
        certaValidacao(celular);
    }
    if(valorDeEmail === "") {
        erroNaValidacao(email, "Por favor preencha esse campo");
    }else {
        certaValidacao(email);
    }
    if(valorDeAssunto === "") {
        erroNaValidacao(assunto, "Por favor preencha esse campo");
    }else if(valorDeAssunto.length < 4) {
        erroNaValidacao(assunto, "Esse campo nessecita ter no minímo 4 letras");
    }else {
        certaValidacao(assunto);
    }
}

function erroNaValidacao(input, menssagem) {
    const contatoInputs = input.parentElement;
    const small = contatoInputs.querySelector("small");
    small.innerText = menssagem;
    contatoInputs.className = 'main__contato_campo_dados errado';
}

function certaValidacao(input) {
    const contatoInputs = input.parentElement;
    contatoInputs.className = 'main__contato_campo_dados certo';
}
