// Función para incrementar el contador
let contador = 0;
function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}

//Decrementar
function decremento() {
    contador--;
    document.getElementById("contador").innerText = contador;
}

// Función para reiniciar el contador
function reiniciar() {
    contador = 0;
    document.getElementById("contador").innerText = contador;
}

// Función para mostrar un mensaje personalizado
function mostrarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = nombre ? `¡Hola, ${nombre}! Bienvenido a mi página.` : "Por favor, ingresa tu nombre.";
    document.getElementById("mensaje").innerText = mensaje;
}
