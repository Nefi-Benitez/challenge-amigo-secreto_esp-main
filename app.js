                              // Desafio amigo secreto

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();

    // Llamamos a la función para poner el puntero de nuevo en el input
    input.value = '';
    ponerFocusEnInput(); 


}

// Lista de amigos
const amigos = [];


// Función de actualizacion para la lista 
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
// funcion para reactivar el puntero al digitar un nombre
function ponerFocusEnInput() {
    const input = document.getElementById('amigo');
    input.focus();}

// Función para el sorteo
function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Se necesita al menos 3 amigo para el sorteo.');
        return;
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado
function mostrarResultado(amigo) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    
// devolver el puntero al input
    const li = document.createElement('li');
    li.textContent = `Amigo seleccionado: ${amigo}`;
    listaResultado.appendChild(li);
}
// agregar amigo utilizando tecla "enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
