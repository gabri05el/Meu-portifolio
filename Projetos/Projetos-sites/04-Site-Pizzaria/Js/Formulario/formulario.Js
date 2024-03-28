const formulario = document.getElementById("formulario");
const nome = document.getElementById("formulario--dados-nome");
const cpf = document.getElementById("formulario--dados-cpf");
const telefone = document.getElementById("formulario--dados-telefone");
const email = document.getElementById("formulario--dados-email");
const mesa = document.getElementById("formulario--dados-mesa");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checagemDoInputs();
});

function checagemDoInputs() {
    const valorDeNome = nome.value.trim();
    const valorDeCpf = cpf.value.trim();
    const valorDeTelefone = telefone.value.trim();
    const valorDeEmail = email.value.trim();
    const valorDeMesa = mesa.value.trim();
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
    if(valorDeTelefone === "") {
        erroNaValidacao(telefone, "Por favor preencha esse campo");
    }else if(valorDeTelefone.length < 11) {
        erroNaValidacao(telefone, "Esse campo nessecita ter no minímo 11 números");
    }else if(valorDeTelefone.length > 13) {
        erroNaValidacao(telefone, "Esse campo nessecita ter no maxímo 13 números");
    }else {
        certaValidacao(telefone);
    }
    if(valorDeEmail === "") {
        erroNaValidacao(email, "Por favor preencha esse campo");
    }else {
        certaValidacao(email);
    }
    if(valorDeMesa === "") {
        erroNaValidacao(mesa, "Por favor preencha esse campo");
    }else if(valorDeMesa.length < 1) {
        erroNaValidacao(mesa, "Esse campo nessecita ter no minímo 1 Mesa");
    }else if(valorDeMesa > 12) {
        erroNaValidacao(mesa, "Esse campo nessecita ter no maxímo 12 Mesas");
    }else {
        certaValidacao(mesa);
    }
}

function erroNaValidacao(input, menssagem) {
    const formularioInputs = input.parentElement;
    const small = formularioInputs.querySelector("small");
    small.innerText = menssagem;
    formularioInputs.className = 'formulario__campo_dados errado';
}

function certaValidacao(input) {
    const formularioInputs = input.parentElement;
    formularioInputs.className = 'formulario__campo_dados certo';
}
