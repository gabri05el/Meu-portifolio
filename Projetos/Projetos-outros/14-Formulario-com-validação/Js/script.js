const formulario = document.querySelector(".formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDosInputs();
});

function checagemDosInputs() {
    const valorDeNome = nome.value.trim();
    const valorDeEmail = email.value.trim();
    const valorDeSenha = senha.value.trim();
    const valorDeConfimaSenha = confirmaSenha.value.trim();
    if(valorDeNome === "") {
        erroNaValidacao(nome, "Por favor preencha esse campo");
    }else if(valorDeNome.length < 3) {
        erroNaValidacao(nome, "Esse campo nessecita ter no minímo 3 letras");
    }else {
        certaValidacao(nome);
    }
    if(valorDeEmail === "") {
        erroNaValidacao(email, "Por favor preencha esse campo");
    }else {
        certaValidacao(email);
    }
    if(valorDeSenha === "") {
        erroNaValidacao(senha, "Por favor preencha esse campo");
    }else if(valorDeSenha.length < 5) {
        erroNaValidacao(senha, "Esse campo nessecita ter no minímo 5 letras");
    }else {
        certaValidacao(senha);
    }
    if(valorDeConfimaSenha === "") {
        erroNaValidacao(confirmaSenha, "Por favor preencha esse campo");
    }else if(valorDeConfimaSenha.length < 5) {
        erroNaValidacao(confirmaSenha, "Esse campo nessecita ter no minímo 5 letras");
    }else if(valorDeConfimaSenha !== valorDeSenha) {
        erroNaValidacao(confirmaSenha, "Essas senhas não estão iguais");
    }else {
        certaValidacao(confirmaSenha);
    }
}

function erroNaValidacao(input, menssagem) {
    const formularioInputs = input.parentElement;
    const small = formularioInputs.querySelector("small");
    small.innerText = menssagem;
    formularioInputs.className = 'formulario__inputs errado';
}

function certaValidacao(input) {
    const formularioInputs = input.parentElement;
    formularioInputs.className = 'formulario__inputs certo';
}