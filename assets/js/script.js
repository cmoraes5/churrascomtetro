// Linguiça - 250 g
// Carne normal - 150 g

// Carne - 400 gr por pessoa. +6 hrs -> 650
// Cerveja - 1200ml por pessoa. +6 hrs -> 2L
// Refrigerante/água - 1L por pessoa. +6 hrs -> 1500ml
// Suco - 500ml por pessoa. +6 hrs -> 800ml

// N bebem - Não bebem cerveja, ms tomam suco, refri e água --> Aumentará o gasto de cerveja e diminuirá o gasto de outras bebidas
// Bebem - Bebem de tudo, inclusive cerveja --> Isso irá aumentar o gasto de refri, água e suco e diminuirá de cerveja
        //    ===> Crianças - Dentro do grupo dos que não bebem


let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;

    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);

    let qtddTotalCarne = carne * adultos + (carnePP(duracao) / 2 * criancas);// ===> Maneira diferente
    let qtddTotalCerveja = cervejaPP(duracao) * adultos; 
    let qtddTotalbebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtddTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtddTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtddTotalbebida / 2000)} Garrafas de Bebida(s)</p>`
}


function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000
    }
}
