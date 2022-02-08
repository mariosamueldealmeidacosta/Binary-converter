let resposta = document.getElementById("resultado")

function calcular(){
    // numero por padrao
    let numeroDecimal = Math.trunc(JSON.parse(document.getElementById("input1").value));
    // alteracao
    while(numeroDecimal > 0){
        let numeroBinario = numeroDecimal % 2;    
        let resultado = numeroDecimal / 2;
        numeroDecimal = Math.trunc(resultado); 
        resposta.innerHTML += numeroBinario;
    }
   
    let invertendo = resposta.innerText.split("").reverse().join("");
    resposta.innerHTML = invertendo;

}
