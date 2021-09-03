function validarNombre() {
  const nombre = document.getElementById("nombre").value;
}
function validarApellido() {
  const apellido = document.getElementById("apellido").value;
}
function validarEdad() {
  const edad = document.getElementById("edad").value;
  console.log(edad);
}
function validarTelefono() {
  const telefono = document.getElementById("telefono").value;
  console.log(telefono);
}

const telefonoInput = document.getElementById("telefono");
const edadInput = document.getElementById("edad");

telefonoInput.addEventListener("change", validarTelefono);
edadInput.addEventListener("change", validarEdad);

function validarForm() {
  if ((nombre, apellido, edad, telefono)) {
    const datos = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      telefono: telefono,
    };
  }
}
