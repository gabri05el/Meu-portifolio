const barras = document.getElementById("div-barras");
const menu = document.getElementById("header-componente-links");

menu.classList.add("remover");
barras.addEventListener('click', () => {
    barras.classList.toggle("ativo");    
    menu.classList.add("remover");
    if(menu.classList.toggle("ativo")) {
        menu.classList.remove("remover");
    }
});
