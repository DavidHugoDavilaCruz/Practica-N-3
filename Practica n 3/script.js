// Arreglo para almacenar usuarios
const usuarios = [];

// Obtener elementos del DOM
const formulario = document.getElementById('registroForm');
const divUsuarios = document.getElementById('usuarios');
const divTotal = document.getElementById('total');
const divError = document.getElementById('error');

// Manejar el envío del formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    divError.textContent = ''; // Reiniciar mensaje de error

    // Capturar los datos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value.trim();

    // Validar campos vacíos
    if (!nombre || !email || !edad) {
        divError.textContent = 'Todos los campos son obligatorios.';
        return;
    }

    // Crear un objeto usuario
    const usuario = {
        nombre: nombre,
        email: email,
        edad: edad
    };

    // Agregar el usuario al arreglo
    usuarios.push(usuario);

    // Mostrar los usuarios registrados
    mostrarUsuarios();
    
    // Reiniciar el formulario
    formulario.reset();
});

// Función para mostrar usuarios registrados
function mostrarUsuarios() {
    divUsuarios.innerHTML = ''; // Limpiar el ul

    usuarios.forEach((usuario, index) => {
        const usuarioLi = document.createElement('li');
        usuarioLi.textContent = `${usuario.nombre}, ${usuario.email}, ${usuario.edad} años `;
        
        // Botón para eliminar usuario
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            eliminarUsuario(index);
        });

        usuarioLi.appendChild(botonEliminar);
        divUsuarios.appendChild(usuarioLi);
    });

    // Mostrar total de usuarios
    divTotal.textContent = `Total de usuarios: ${usuarios.length}`;
}

// Función para eliminar un usuario
function eliminarUsuario(index) {
    usuarios.splice(index, 1); // Eliminar el usuario del arreglo
    mostrarUsuarios(); // Actualizar la lista
}