//Mensaje de Bienvenida
document.getElementById("formBienvenida").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = document.getElementById("edad").value.trim();

  const mensaje = `¡Hola ${nombre} ${apellido}! Bienvenido/a.`;
  document.getElementById("mensajeBienvenida").textContent = mensaje;
});

// Menu hamburguesa
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Boton de like
function toggleLike(button) {
  const countSpan = button.querySelector(".like-count");
  let count = parseInt(countSpan.textContent);

  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    count = Math.max(0, count - 1);
  } else {
    button.classList.add("liked");
    count += 1;
  }

  countSpan.textContent = count;
}

// Activar formulario solo si existe en la página
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formComentario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value.trim();
      const texto = document.getElementById("texto").value.trim();

      if (usuario && texto) {
        const nuevo = document.createElement("div");
        nuevo.className = "comentario";
        nuevo.innerHTML = `
          <strong>${usuario}</strong>
          <p>${texto}</p>
          <button class="like-btn" onclick="toggleLike(this)">👍 Like <span class="like-count">0</span></button>
        `;
        document.getElementById("comentarios").appendChild(nuevo);
        form.reset();
      }
    });
  }
});

// Banco_miembros
    document.getElementById("buscar").addEventListener("input", function() {
  const filtro = this.value.toLowerCase();
  const tarjetas = document.querySelectorAll(".tarjeta-miembro");

  tarjetas.forEach(card => {
    const nombre = card.querySelector("p").textContent.toLowerCase();
    card.style.display = nombre.includes(filtro) ? "block" : "none";
  });
    });