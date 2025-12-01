const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
const resultado = document.getElementById("resultado");

mensajeBienvenida.textContent = "¡Bienvenido a la página de operaciones!";

function obtenerValores() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);

  if (isNaN(n1) || isNaN(n2)) {
    resultado.innerHTML = "<p style='color:red;'>Por favor ingresá ambos números.</p>";
    return null;
  }
  return { n1, n2 };
}

window.sumar = function() {
  const valores = obtenerValores();
  if (!valores) return;
  resultado.innerHTML = `<p>Resultado: ${valores.n1} + ${valores.n2} = ${valores.n1 + valores.n2}</p>`;
}

window.restar = function() {
  const valores = obtenerValores();
  if (!valores) return;
  resultado.innerHTML = `<p>Resultado: ${valores.n1} - ${valores.n2} = ${valores.n1 - valores.n2}</p>`;
}

window.multiplicar = function() {
  const valores = obtenerValores();
  if (!valores) return;
  resultado.innerHTML = `<p>Resultado: ${valores.n1} × ${valores.n2} = ${valores.n1 * valores.n2}</p>`;
}

window.dividir = function() {
  const valores = obtenerValores();
  if (!valores) return;
  if (valores.n2 === 0) {
    resultado.innerHTML = "<p style='color:red;'>No se puede dividir por cero.</p>";
    return;
  }
  resultado.innerHTML = `<p>Resultado: ${valores.n1} ÷ ${valores.n2} = ${valores.n1 / valores.n2}</p>`;
}
