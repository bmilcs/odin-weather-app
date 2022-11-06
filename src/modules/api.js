// according to the project instructions, sharing this api key is
// perfectly okay because it is publicly available & there is no consequence
// for exposing it.

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

// ----------------------------------------------------------

export const getWeatherByCityName = async (cityName) => {
  try {
    const fixedCityName = cityName.trim().replace(/\s+/gi, "%20");
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${fixedCityName}&appid=${APIKEY}`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(`WebApp Error: ${err}`);
  }
};
