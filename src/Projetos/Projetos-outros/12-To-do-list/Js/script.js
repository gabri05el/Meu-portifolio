const localStorageKey = 'lista_afazeres-Gabriel';

function validaNovaTask() {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValor = document.getElementById("input_nova_tesk").value;
    let existe = valores.find(x => x.nome == inputValor);
    return !existe ? false : true;
}

function novaTask() {
    let input = document.getElementById("input_nova_tesk");
    input.style.border = "";

    if(!input.value) {
        input.style.border = "1px solid red";
        alert("Digite algo para inserir em sua lista");
    } else if(validaNovaTask()) {
        alert("Já existe uma task com essa descrição");
    }    
    else {
        let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        valores.push( {
            nome: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(valores));
        showValues();        
    }    
    input.value = "";
}

function showValues() {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("lista_afazeres");
    list.innerHTML = "";
    for(let i = 0; i < valores.length; i++) {
        list.innerHTML += `<li>${valores [i] [`nome`]}<button class='botao_remove' onclick='removeItem("${valores [i] [`nome`]}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></button></li>`;
    }
}

function removeItem(data) {
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = valores.findIndex(x => x.nome == data);
    valores.splice(index,1);
    localStorage.setItem(localStorageKey,JSON.stringify(valores));
    showValues();
}

showValues();