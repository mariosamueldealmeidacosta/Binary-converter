let respostafinal = document.getElementById("resultado") 
// In the line above we take the place in HTML that the 
// result will be shower 

// This function will calculate the result of converting
// a whole number to a binary number whew user click 
// in the button 'calcular' on HTML

function calcular(a){
    // With the respostafinal.innerHTML = " "; we erase de previous result in 
    // case that the user already use the program 
    respostafinal.innerHTML = " ";
    // Now we pass the value of A to an other variable because I 
    // think is better than use (let wholeNumber = Math.trunc(JSON.parse(a.value);)
    // cause in this way (let b = a.value;) I recive less bugs
    let b = a.value;
    // This IF is used to prevent recive an empty number input
    if (!b.replace(/\s/g, '').length ) {
        alert("Por favor insira um número ")
    } else {
        console.log("hora de fazer os calculos")
        // The first step we put de variable 'b' into 
        // another and transforming in number with JSON.parse
        // and round off for a whole number with Math.trunc
        let numeroInteiro = Math.trunc(JSON.parse(b));
        // now we use an while loop do to the calculations 
        // For converter an whole number to a binary number we need to 
        // divide the whole number for 2 and the rest of it, in case 
        // 1 or 0 we take for some kind of "binaryLine" (and we comtinue 
        // to divide the whole number until it is 0) and add the rest in 
        // "binaryLine" and inverting it later
        while(numeroInteiro > 0){
        // Here we add the "binaryLine" the rest of the whole number divide 
        // for 2 (it recive 0 or 1)
        let numeroBinario = numeroInteiro % 2; 
        // Now we devide the whole number for 2 in descending way 
        // because of loop and adding the result in other variable 
        let divisaoDOinteiro = numeroInteiro / 2
        // Here the whole number recive itself but devide for 2
        // and using Math.trunc for rounding it 
        numeroInteiro = Math.trunc(divisaoDOinteiro); 
        // And here we save the "binaryLine" in other variable 
        respostafinal.innerHTML += numeroBinario;
        }
        
        // here we invert "binaryLine" putting the whole thing 
        // in the right way
        let invertendo = respostafinal.innerText.split("").reverse().join("");
        // and finally put it on page with innerHTML
        respostafinal.innerHTML = invertendo;
    }
}

// Now we gonna convert a binary number to a whole number:
// we use this function so the user can only type a binary number 
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;
   if((tecla==48 || tecla==49)) return true;
    else{
   return false;
}
}

// The first thing that we do is define the variables that is used below
let exponential = 1;
let NumeroParaMultiplicarcomExponecial = '';
let SalvarExponecial = [ ];
let soma = 0;
let respostafinal2 = document.getElementById("resultado2") 

// the second step we need to invert the binary number 
// later we can do an exponential for each number in 
// the array 

function calcularBinarioParaDecimal(a){
    //  Here we redefine the variables in 
    // case that the user already use the program 
    respostafinal2.innerHTML = " ";
    exponential = 1;
    NumeroParaMultiplicarcomExponecial = '';
    SalvarExponecial.length = 0;   
    soma = 0;
    // here we put a.value to variable b like in the before function
    let b = a.value;
    // to do the calculations we invert the binary number
    let invertendo = b.split("").reverse();
    // them we iterate the number with a for loop
    for (let index = 0; index < invertendo.length; index++){
        // here we multiplicate the first in the "binaryLine" with the exponential of 2
        NumeroParaMultiplicarcomExponecial = invertendo[index] * exponential;
        // Now we save the result in an array
        SalvarExponecial.push(NumeroParaMultiplicarcomExponecial);
        // and here the exponential is duplicate
        exponential = 2 * exponential;
    }
    
    // last we just plus the results that are save in the array
    for(let i = 0; i < SalvarExponecial.length; i++){
        soma += parseInt(SalvarExponecial[i]);
    }
    
    respostafinal2.innerHTML = soma;
}
