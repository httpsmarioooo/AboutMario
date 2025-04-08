document.getElementById("agregar").addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    const input = document.getElementById("nueva-tarea");
    const texto = input.value.trim();
    if (texto) {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('lista-tareas').appendChild(li);
        input.value = ''; // Limpia el input después de agregar la tarea
    }
});
