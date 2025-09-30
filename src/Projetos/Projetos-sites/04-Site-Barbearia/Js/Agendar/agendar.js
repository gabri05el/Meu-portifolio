const contato = document.getElementById("agendar");
const nome = document.getElementById("agendar--dados-nome");
const cpf = document.getElementById("agendar--dados-cpf");
const celular = document.getElementById("agendar--dados-celular");
const email = document.getElementById("agendar--dados-email");

contato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDoInputs();
});

function checagemDoInputs() {
    const valorDeNome = nome.value.trim();
    const valorDeCpf = cpf.value.trim();
    const valorDeCelular = celular.value.trim();
    const valorDeEmail = email.value.trim();
    if(valorDeNome === "") {
        erroNaValidacao(nome, "Por favor preencha esse campo");
    }else if(valorDeNome.length < 3) {
        erroNaValidacao(nome, "Esse campo nessecita ter no minímo 3 letras");
    }else {
        certaValidacao(nome);
    }
    if(valorDeCpf === "") {
        erroNaValidacao(cpf, "Por favor preencha esse campo");
    }else if(valorDeCpf.length < 11) {
        erroNaValidacao(cpf, "Esse campo nessecita ter no minímo 11 números");
    }else {
        certaValidacao(cpf);
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
