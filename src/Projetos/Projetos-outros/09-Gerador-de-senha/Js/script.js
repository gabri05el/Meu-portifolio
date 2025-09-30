let ElementoControle = document.getElementById("controle");         // É o (INPUT)
let ElementoBotao = document.getElementById("botao");         // É o (BUTTON)

let tamanhoDaSenha = document.getElementById("valor");           // É o Primeiro (SPAN)
let senha = document.getElementById("senha");            // É o Terceiro (SPAN) 

let conteudoSenha = document.getElementById("conteudo_senha");      // É a (DIV)

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = '';

tamanhoDaSenha.innerHTML = ElementoControle.value;

controle.oninput = function(){                // quantas caracteres voce vai usar.(transformou isso em html)  
    tamanhoDaSenha.innerHTML = this.value;
}

function geradorDeSenha(){               // Gerador de senha

  let pass = '';
  for(let i = 0, n = caracteres.length; i < ElementoControle.value; ++i){
    pass += caracteres.charAt(Math.floor(Math.random() * n));
  }
  
  console.log(pass)
  conteudoSenha.classList.remove("remover");         // Removeu a classe ("remover")
  senha.innerHTML = pass;                          // Passa a senha para o "Gerar senha".(transformando em html)  
  novaSenha = pass;
}

function copiaSenha(){                   // Copiando a senha
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}