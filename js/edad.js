document.getElementById("formBienvenida").addEventListener("submit", function(e) {
  e.preventDefault();

  const edad = parseInt(document.getElementById("edad").value.trim());
  let clasificacionEdad = "";

  if (edad > 20) {
    clasificacionEdad = "Usted Es mayor de 20 años.";
  } else if (edad < 20) {
    clasificacionEdad = "Usted Es menor de 20 años.";
  } else {
    clasificacionEdad = "Tiene exactamente 20 años.";
  }

  document.getElementById("mensajeBienvenida").textContent += ` ${clasificacionEdad}`;
});