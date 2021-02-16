var resultsum;
var resultrest;
var resultmult;
var resultdiv;

var operador1 = () => parseInt(document.getElementById("first-op").value);
var operador2 = () => parseInt(document.getElementById("second-op").value);

function blank (){
    if (!operador1()|| !operador2()){
        document.getElementById("resultado").innerText = "Debes introducir ambos operandos"
    }
}


function suma() {
    resultsum = operador1() + operador2();
    document.getElementById("resultado").innerText = resultsum;
    blank();
}


function resta() {
     resultrest = operador1() - operador2();
     document.getElementById("resultado").innerText = resultrest;
     blank();
}

function multiplicacion() {
     resultmult = operador1()* operador2();
     document.getElementById("resultado").innerText = resultmult;
     blank();
}


function division() {
    resultdiv = operador1() / operador2();
    document.getElementById("resultado").innerText = resultdiv;
    blank();
}

document.getElementById("sumar").addEventListener("click", suma);

document.getElementById("restar").addEventListener("click",resta);

document.getElementById("multiplicar").addEventListener("click",multiplicacion);

document.getElementById("dividir").addEventListener("click",division);





