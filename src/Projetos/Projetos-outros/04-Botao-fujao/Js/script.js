const btNao = document.getElementById("bt-nao");
const larguraDaTela = window.innerWidth;
const alturaDaTela = window.innerHeight;
const x = larguraDaTela - btNao.offsetWidth;
const y = alturaDaTela - btNao.offsetHeight;

function botaoFujao() {
    var posicaoX = Math.floor(Math.random() * x);
    var posicaoY = Math.floor(Math.random() * y);    
    btNao.style.left = posicaoX + "px";
    btNao.style.top = posicaoY + "px";
}
