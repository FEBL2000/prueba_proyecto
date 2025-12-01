// APIs de Clima //
const API_KEY = "a061cf9aee08094d37c1bda60d3fd3ab";
const botonBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

if (botonBuscar) {
  botonBuscar.addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadInput").value.trim();
    if (!ciudad) {
      resultado.innerHTML = "<p style='color:red;'>Por favor ingresá una ciudad válida.</p>";
      return;
    }

    resultado.innerHTML = "<p>Cargando datos del clima...</p>";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${API_KEY}&units=metric&lang=es`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Ciudad no encontrada");
        return response.json();
      })
      .then(data => {
        resultado.innerHTML = `
          <p><strong>Ciudad:</strong> ${data.name}</p>
          <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
          <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
          <p><strong>Descripción del clima:</strong> ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        console.error("Error:", error);
      });
  });
}

// APIs de ciudad //
function buscarPais() {
  const input = document.getElementById("paisInput").value.trim();
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.innerHTML = "<p>Por favor ingresá un país válido.</p>";
    return;
  }

  resultado.innerHTML = "<p>Cargando datos del país...</p>";

  fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(input)}?fullText=true`)
    .then(response => {
      if (!response.ok) throw new Error("País no encontrado");
      return response.json();
    })
    .then(data => {
      const pais = data[0];
      const nombre = pais.name.common;
      const capital = pais.capital ? pais.capital[0] : "No disponible";
      const poblacion = pais.population.toLocaleString();
      const bandera = pais.flags.svg;

      resultado.innerHTML = `
        <img src="${bandera}" alt="Bandera de ${nombre}" style="width: 200px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);">
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Población:</strong> ${poblacion}</p>
      `;
    })
    .catch(error => {
      resultado.innerHTML = "<p>No se encontró el país. Verificá el nombre.</p>";
      console.error(error);
    });
}

// APIs de pokemon //
function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.innerHTML = "<p>Por favor ingresá un nombre o ID válido.</p>";
    return;
  }

  resultado.innerHTML = "<p>Cargando datos del Pokémon...</p>";

  fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(response => {
      if (!response.ok) throw new Error("Pokémon no encontrado");
      return response.json();
    })
    .then(data => {
      const nombre = data.name;
      const imagen = data.sprites.front_default;
      const tipos = data.types.map(t => t.type.name).join(", ");
      const peso = data.weight / 10; // en kg

      resultado.innerHTML = `
        <img src="${imagen}" alt="${nombre}" style="width: 150px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);">
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Peso:</strong> ${peso} kg</p>
      `;
    })
    .catch(error => {
      resultado.innerHTML = "<p>No se encontró el Pokémon. Verificá el nombre o ID.</p>";
      console.error(error);
    });
}

// APIs de Rick & Morty //
function buscarPersonaje() {
  const id = document.getElementById("personajeId").value;
  const resultado = document.getElementById("resultado");

  if (!id || id < 1) {
    resultado.innerHTML = "<p>Por favor ingresá un ID válido.</p>";
    return;
  }

  resultado.innerHTML = "<p>Cargando personaje...</p>";

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      if (!response.ok) throw new Error("Personaje no encontrado");
      return response.json();
    })
    .then(data => {
      resultado.innerHTML = `
        <img src="${data.image}" alt="${data.name}" style="width: 200px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);">
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Estado:</strong> ${data.status}</p>
        <p><strong>Especie:</strong> ${data.species}</p>
      `;
    })
    .catch(error => {
      resultado.innerHTML = "<p>No se encontró el personaje. Verificá el ID.</p>";
      console.error(error);
    });
}
    
// APIs de CoinGecko //
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

function buscarDatos(crypto) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>Cargando datos...</p>";

  fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`)
    .then(response => response.json())
    .then(data => {
      const precio = data.market_data.current_price.usd;
      const cambio24h = data.market_data.price_change_percentage_24h;
      const marketCap = data.market_data.market_cap.usd;

      resultado.innerHTML = `
        <div style="text-align:left;">
          <p><strong>Moneda:</strong> ${data.name}</p>
          <p><strong>Precio en USD:</strong> $${precio.toLocaleString()}</p>
          <p><strong>Cambio 24h:</strong> ${cambio24h.toFixed(2)}%</p>
          <p><strong>Market Cap:</strong> $${marketCap.toLocaleString()}</p>
        </div>
      `;
    })
    .catch(error => {
      resultado.innerHTML = "<p>Error al obtener los datos. Intenta de nuevo.</p>";
      console.error(error);
    });
}