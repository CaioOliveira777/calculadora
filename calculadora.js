let historico = [];

function inserirNumeros(num) {
    var number = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = number + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
        var abc = document.getElementById('resultado').innerHTML = eval(resultado);
        historico.push(abc);
        return abc;
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

function sqrt() {
    var meuNumero = document.getElementById('resultado').innerHTML;

    if (/[\+\-\*\/]/.test(meuNumero)) {
        var result = calcular();
        document.getElementById('resultado').innerHTML = Math.sqrt(result);
    } else {
        var resultado = document.getElementById('resultado').innerHTML;
        if (resultado) {
            document.getElementById('resultado').innerHTML = Math.sqrt(resultado);
        } else {
            document.getElementById('resultado').innerHTML = "";
        }
    }
}
    
function potencia() {
    var meuNumero2 = document.getElementById('resultado').innerHTML;

    if (/[\+\-\*\/]/.test(meuNumero2)) {
        var result = calcular();
        document.getElementById('resultado').innerHTML = eval(result * result);
    } else {
        var resultado = document.getElementById('resultado').innerHTML;
        if (resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado * resultado);
        } else {
            document.getElementById('resultado').innerHTML = "";
        }
    }
}

function porcentagem() {
    var meuNumero3 = document.getElementById('resultado').innerHTML;

    if (/[\+\-\*\/]/.test(meuNumero3)) {
        var result = calcular();
        document.getElementById('resultado').innerHTML = eval(result / 100);
    } else {
        var resultado = document.getElementById('resultado').innerHTML;
        if (resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado / 100);
        } else {
            document.getElementById('resultado').innerHTML = "";
        }
    }
}

function historicoCalc() {
    document.getElementById('resultado').innerHTML = historico[historico.length - 1];
}

