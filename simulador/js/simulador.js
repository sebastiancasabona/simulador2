function ingreso() {
    console.log("hola");
}

ingreso();

let nombreIngresado = prompt("Ingrese su nombre");
alert("¡Hola! Vamos a hacer cálculos, " + nombreIngresado);

function mostrarResultadoEnHTML(resultado1, resultado2) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "El primer resultado es: " + resultado1 + "<br>";
    resultadoDiv.innerHTML += "El segundo resultado es: " + resultado2;
}

function calculo(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        default:
            return 0;
    }
}

let continuar = true;

while (continuar) {
    let num1 = parseInt(prompt("Ingrese el primer número para la operación 1:"));
    let num2 = parseInt(prompt("Ingrese el segundo número para la operación 1:"));
    let operacion1 = prompt("Ingrese la operación para la operación 1 (+, -, *, /):");

    let resultadoOperacion1 = calculo(num1, num2, operacion1);

    num1 = parseInt(prompt("Ingrese el primer número para la operación 2:"));
    num2 = parseInt(prompt("Ingrese el segundo número para la operación 2:"));
    let operacion2 = prompt("Ingrese la operación para la operación 2 (+, -, *, /):");

    let resultadoOperacion2 = calculo(num1, num2, operacion2);

    mostrarResultadoEnHTML(resultadoOperacion1, resultadoOperacion2);

    continuar = confirm("¿Desea hacer más cálculos?");
}
