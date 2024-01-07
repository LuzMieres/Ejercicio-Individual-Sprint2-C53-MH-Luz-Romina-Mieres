// Ejercicio 1
const caja = document.getElementById('contenedor');
const boton = document.getElementById('botonChange');
const colorName = document.getElementById('colorName');

console.log(caja);
console.log(boton);

document.getElementById('botonChange').addEventListener('click', function () {
    let colorRojo = 'bg-red-300';
    let colorAzul = 'bg-blue-300';

    let clasesActuales = caja.classList;

    if (clasesActuales.contains(colorRojo)) {
        caja.classList.remove(colorRojo);
        caja.classList.add(colorAzul);
        colorName.innerText = 'Azul';
    } else {
        caja.classList.remove(colorAzul);
        caja.classList.add(colorRojo);
        colorName.innerText = 'Rojo';
    }
});

//Ejercicio 2
const caja1 = document.getElementById ('caja');
const texto = document.getElementById ('text');
console.log(caja1);
console.log(texto);

document.getElementById ('text').addEventListener ('input', function reflejarTexto() {
    let textoIngresado = document.getElementById("text").value;
    document.getElementById("caja").innerHTML = textoIngresado;
})
document.getElementById ('reset').addEventListener('click', function () {
        document.getElementById("caja").innerHTML = '';
        document.getElementById("text").value = '';
})

function enviarFormulario(event) {
    event.preventDefault();
}

// Ejercicio 3
document.getElementById('botonCalculate').addEventListener('click', function () {
    let peso = document.getElementById('peso').value;
    let estatura = document.getElementById('estatura').value;
    let resultadoInput = document.getElementById('resultado');

    if (peso && estatura) {
        let estaturaEnMetros = estatura / 100;
        let imc = peso / (estaturaEnMetros * estaturaEnMetros);
        resultadoInput.value = 'Su IMC es: ' + imc.toFixed(2);
    } else {
        resultadoInput.value = 'Por favor, ingrese su peso y estatura.';
    }
});

//Ejercicio 4
const tipoCambio = 500; // 1 dólar = 500 moneda local

// Función para convertir de moneda local a dólares
function convertirADolares() {
    const monedaLocal = parseFloat(document.getElementById('mLocal').value);
    if (!isNaN(monedaLocal)) {
        const resultado = monedaLocal / tipoCambio;
        document.getElementById('mDolares').value = resultado.toFixed(2);
    } else {
        alert('Por favor, ingrese un monto válido en moneda local.');
    }
}

// Función para borrar entradas
function borrarEntradas() {
    document.getElementById('mLocal').value = '';
    document.getElementById('mDolares').value = '';
}

// Función para convertir de dólares a moneda local
function convertirAMonedaLocal() {
    const montoDolares = parseFloat(document.getElementById('dolar').value);
    if (!isNaN(montoDolares)) {
        const resultado = montoDolares * tipoCambio;
        document.getElementById('local').value = resultado.toFixed(2);
    } else {
        alert('Por favor, ingrese un monto válido en dólares.');
    }
}

// Función para borrar entradas
function borrarEntradasDolares() {
    document.getElementById('local').value = '';
    document.getElementById('dolar').value = '';
}

// Asociar funciones a eventos
document.getElementById('buttonConvert').addEventListener('click', convertirADolares);
document.getElementById('buttonDelete').addEventListener('click', borrarEntradas);
document.getElementById('convert').addEventListener('click', convertirAMonedaLocal);
document.getElementById('delete').addEventListener('click', borrarEntradasDolares);