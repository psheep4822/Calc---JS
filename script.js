let atual = "";
let anterior = null;
let operador = null;
const visor = document.getElementById("visor");


function calcular (a, b, op){
    switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "X": return a * b;
            case "/": return b === 0 ? "Erro" : a / b;
    }
}