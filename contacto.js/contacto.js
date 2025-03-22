// Constructor del cliente
function Cliente(nombre, apellido, edad, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.correo = correo;
}

// Inputs
const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("lastname");
const inputEdad = document.getElementById("age");
const inputCorreo = document.getElementById("email");

// Array de clientes desde localStorage o vacío
let client = JSON.parse(localStorage.getItem("clientes")) || [];

// Función para registrar un nuevo cliente
function register() {
    if (inputNombre.value.trim() === "") {
        alert("Por favor ingresa el nombre");
        return;
    }

    const nuevoCliente = new Cliente(
        inputNombre.value.trim(),
        inputApellido.value.trim(),
        inputEdad.value.trim(),
        inputCorreo.value.trim()
    );

    client.push(nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(client));
    displayClients();

    // Limpiar formulario
    inputNombre.value = "";
    inputApellido.value = "";
    inputEdad.value = "";
    inputCorreo.value = "";
}

// Función para mostrar los clientes en la tabla
function displayClients() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    client.forEach((cliente, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.edad}</td>
            <td>${cliente.correo}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="deleteClient(${index})">Eliminar</button>
            </td>
        `;
        list.appendChild(row);
    });
}

// Eliminar cliente individual
function deleteClient(index) {
    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
        client.splice(index, 1);
        localStorage.setItem("clientes", JSON.stringify(client));
        displayClients();
    }
}

// Eliminar todos los clientes
function clearStorage() {
    if (confirm("¿Seguro que deseas eliminar todos los clientes?")) {
        client = [];
        localStorage.removeItem("clientes");
        displayClients();
    }
}

// Mostrar los clientes al cargar la página
document.addEventListener("DOMContentLoaded", displayClients);