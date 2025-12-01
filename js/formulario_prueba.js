document.getElementById("formExamen").addEventListener("submit", function(e) {
  e.preventDefault();

  const respuestas = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.getElementById("q3").value.trim(),
    q4: document.querySelector('input[name="q4"]:checked')?.value,
    q5: document.querySelector('input[name="q5"]:checked')?.value,
  };

  const resultado = document.getElementById("resultado");

  if (!respuestas.q1 || !respuestas.q2 || !respuestas.q3 || !respuestas.q4 || !respuestas.q5) {
    resultado.innerHTML = `<p style="color:red;">Por favor responde todas las preguntas.</p>`;
    return;
  }

  // Mensaje de éxito + botón de revisión
  resultado.innerHTML = `
    <p><strong>✅ Respuestas enviadas</strong></p>
    <button id="btnRevision" class="leer-mas" style="margin-top:10px;">Revisión</button>
    <div id="detalleRevision" style="margin-top:15px; display:none;"></div>
  `;

  // Evento para mostrar revisión
  document.getElementById("btnRevision").addEventListener("click", () => {
    const detalle = document.getElementById("detalleRevision");
    detalle.innerHTML = `
      <p><strong>1.</strong> Lenguaje más usado: ${respuestas.q1}</p>
      <p><strong>2.</strong> Hardware físico: ${respuestas.q2}</p>
      <p><strong>3.</strong> HTML: ${respuestas.q3}</p>
      <p><strong>4.</strong> CPU: ${respuestas.q4}</p>
      <p><strong>5.</strong> Sistema operativo: ${respuestas.q5}</p>
    `;
    detalle.style.display = "block";
  });
});