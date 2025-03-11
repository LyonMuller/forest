async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao obter os dados.");

    const data = await response.json();
    const temp = data.current_weather.temperature;
    const weatherCode = data.current_weather.weathercode;

    // Define emojis com base no código do tempo
    let weatherEmoji = "☀️";
    let videoSrc = "./video/video_sol.mp4";

    if ([0, 1].includes(weatherCode)) {
      weatherEmoji = "☀️"; // Tempo limpo
      videoSrc = "./video/video_sol.mp4";
    } else if ([2, 3].includes(weatherCode)) {
      weatherEmoji = "⛅"; // Parcialmente nublado
      videoSrc = "./video/video_nublado.mp4";
    } else if ([45, 48].includes(weatherCode)) {
      weatherEmoji = "🌫️"; // Neblina
      videoSrc = "./video/video_neblina.mp4";
    } else if ([51, 53, 55, 56, 57].includes(weatherCode)) {
      weatherEmoji = "🌦️"; // Chuva leve
      videoSrc = "./video/video_chuva.mp4";
    } else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
      weatherEmoji = "🌧️"; // Chuva moderada/forte
      videoSrc = "./video/video_chuva.mp4";
    } else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
      weatherEmoji = "❄️"; // Neve
      videoSrc = "./video/video_neve.mp4";
    } else if ([95, 96, 99].includes(weatherCode)) {
      weatherEmoji = "⛈️"; // Tempestade
      videoSrc = "./video/video_tempestade.mp4";
    }

    // Atualiza elementos no DOM
    temperatura.textContent = `${temp}º`;
    tempo.innerText = weatherEmoji;
    video.src = videoSrc;

  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
  }
}

function fetchUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.warn("Erro ao obter localização. Usando fallback para Joinville, SC.");
        getWeather(-26.3045, -48.8487); // Joinville, SC
      }
    );
  } else {
    console.warn("Geolocalização não suportada. Usando fallback para Joinville, SC.");
    getWeather(-26.3045, -48.8487);
  }
}

// Elementos do DOM
const video = document.getElementById("video"),
      temperatura = document.getElementById("temperatura"),
      tempo = document.getElementById("tempo");

// Obtém a localização e a temperatura
fetchUserLocation();