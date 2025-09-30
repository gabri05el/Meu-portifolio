const formulario = document.querySelector(".formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnS = document.getElementById("btn-senha");
const btnSC = document.getElementById("btn-senha-confirma");
const confirmaSenha = document.getElementById("confirmaSenha");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDosInputs();
});

function checagemDosInputs() {
    const valorDeNome = nome.value.trim();
    const valorDeEmail = email.value.trim();
    const valorDeSenha = senha.value.trim();
    const valorDeConfirmaSenha = confirmaSenha.value.trim();
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
    if(valorDeConfirmaSenha === "") {
        erroNaValidacao(confirmaSenha, "Por favor preencha esse campo");
    }else if(valorDeConfirmaSenha.length < 5) {
        erroNaValidacao(confirmaSenha, "Esse campo não tem o minímo de letras o suficiente");
    }else if(valorDeConfirmaSenha !== valorDeSenha) {
        erroNaValidacao(confirmaSenha, "Á senha não estão iguais");
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

function mostraSenha() {
    if(senha.type === 'password') {
        senha.setAttribute("type", "text");
        btnS.classList.replace("fa-eye", "fa-eye-slash");
    }else {
        senha.setAttribute("type", "password");
        btnS.classList.replace("fa-eye-slash", "fa-eye");
    }
}

function mostraSenhaConfirma() {
    if(confirmaSenha.type === 'password') {
        confirmaSenha.setAttribute("type", "text");
        btnSC.classList.replace("fa-eye", "fa-eye-slash");
    }else {
        confirmaSenha.setAttribute("type", "password");
        btnSC.classList.replace("fa-eye-slash", "fa-eye");
    }
}
