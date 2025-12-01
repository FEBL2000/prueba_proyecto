function toggleAcordeon(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains("open");

  document.querySelectorAll(".acordeon-toggle").forEach(btn => {
    btn.classList.remove("open");
    btn.nextElementSibling.style.display = "none";
  });

  if (!isOpen) {
    button.classList.add("open");
    content.style.display = "flex";
  }
}

function seleccionarCurso(curso) {
  document.getElementById("cursoSeleccionado").value = curso;
  document.querySelector(".acordeon-toggle .label").textContent = curso;
  document.querySelectorAll(".acordeon-content").forEach(el => el.style.display = "none");
  document.querySelectorAll(".acordeon-toggle").forEach(btn => btn.classList.remove("open"));
}

document.getElementById("formInscripcion").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const curso = document.getElementById("cursoSeleccionado").value;
  const resultado = document.getElementById("resultado");

  if (!curso) {
    resultado.innerHTML = `<p style="color:red;">Por favor seleccioná un curso.</p>`;
    return;
  }

  resultado.innerHTML = `
    <p><strong>Estado:</strong> Inscripción recibida</p>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${correo}</p>
    <p><strong>Curso:</strong> ${curso}</p>
  `;
});