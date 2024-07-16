const botaoFeminino = document.getElementById("catg-feminino");
const botaoMasculino = document.getElementById("catg-masculino");

const feminino = document.querySelector(".categoria__feminino_slide");
const masculino = document.querySelector(".categoria__masculino_slide");

botaoFeminino.addEventListener('click', () => {
    masculino.classList.add("catg_slide_off")
    feminino.classList.remove("catg_slide_off")
    botaoMasculino.classList.remove("main__catg_escolha_btn_on")
    botaoFeminino.classList.add("main__catg_escolha_btn_on")
})

botaoMasculino.addEventListener('click', () => {
    feminino.classList.add("catg_slide_off")
    masculino.classList.remove("catg_slide_off")
    botaoFeminino.classList.remove("main__catg_escolha_btn_on")
    botaoMasculino.classList.add("main__catg_escolha_btn_on")
})
