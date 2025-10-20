// Mostrar alerta desde la tarjeta 1
document.getElementById("btnInfo1").addEventListener("click", () => {
  alert("Has hecho clic en Tarjeta 1 ");
});

// Modal dinámico
const modal = new bootstrap.Modal(document.getElementById("miModal"));
document.getElementById("btnModal").addEventListener("click", () => {
  document.getElementById("modalBody").textContent = "Has hecho clic en Tarjeta 2";
  modal.show();
});

// Validación del formulario
const form = document.getElementById("formLogin");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Por favor llena todos los campos");
  } else if (user === "admin" && pass === "1234") {
    alert("Inicio de sesión exitoso ");
 
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    document.getElementById("navbar").style.display = "block";

    // Llevar automáticamente al inicio
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert("Usuario o contraseña incorrectos ");
  }
});
