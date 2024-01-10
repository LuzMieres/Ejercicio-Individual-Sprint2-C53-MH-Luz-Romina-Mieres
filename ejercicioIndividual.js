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
        resultadoInput.value = 'Su IMC es: ' + imc.toFixed(2);''
    } else {
        resultadoInput.value = 'Por favor, ingrese su peso y estatura.';
    }
});

//Ejercicio 4
const tipoCambio = 500; // 1 dólar = 500 moneda local

// Función para convertir de moneda local a dólares
document.getElementById('buttonConvert').addEventListener('click', function convertirADolares() {
    const monedaLocalInput = document.getElementById('mLocal');
    const monedaLocal = monedaLocalInput.value.trim();

    // Verificar si la cadena no contiene puntos ni comas
    if (monedaLocal.indexOf('.') === -1 && monedaLocal.indexOf(',') === -1) {
        // Convertir a número solo si no hay puntos ni comas
        const monedaLocalNum = parseInt(monedaLocal);

        if (!isNaN(monedaLocalNum)) {
            const resultado = monedaLocalNum / tipoCambio;
            document.getElementById('mDolares').value = resultado.toFixed(2);
        } else {
            alert('Por favor, ingrese un monto válido en moneda local.');
        }
    } else {
        alert('Por favor, ingrese un monto válido en moneda local (sin puntos ni comas).');
        monedaLocalInput.value = ''; // Limpiar el campo en caso de entrada no válida
    }
});

// Función para borrar entradas
document.getElementById('buttonDelete').addEventListener('click', function borrarEntradasDolares() {
    document.getElementById('mLocal').value = '';
    document.getElementById('mDolares').value = '';
})

document.getElementById('convert').addEventListener('click', function convertirAMonedaLocal() {
    const montoDolaresInput = document.getElementById('dolar');
    const montoDolares = montoDolaresInput.value.trim();

    // Verificar si la cadena no contiene puntos ni comas
    if (montoDolares.indexOf('.') === -1 && montoDolares.indexOf(',') === -1) {
        // Convertir a número solo si no hay puntos ni comas
        const montoDolaresNum = parseFloat(montoDolares);
        
        if (!isNaN(montoDolaresNum)) {
            const resultado = montoDolaresNum * tipoCambio;
            document.getElementById('local').value = resultado.toFixed(2);
        } else {
            alert('Por favor, ingrese un monto válido en dólares.');
        }
    } else {
        alert('Por favor, ingrese un monto válido en dólares (sin puntos ni comas).');
        montoDolaresInput.value = ''; // Limpiar el campo en caso de entrada no válida
    }
});

// Función para borrar entradas
document.getElementById('delete').addEventListener('click', function borrarEntradasDolares() {
    document.getElementById('local').value = '';
    document.getElementById('dolar').value = '';
})





