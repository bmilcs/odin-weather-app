// according to the project instructions, sharing this api key is
// perfectly okay because it is publicly available & there is no consequence
// for exposing it.

const APIKEY = "573f3a6ef58e78ac80754a1709cc780b";

export const getWeatherByCityName = async (cityName, units = "imperial") => {
  try {
    const parsedCityName = cityName.trim().replace(/\s+/gi, "%20");
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${parsedCityName}&appid=${APIKEY}&units=${units}`;
    // const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${fixedCityName}&appid=${APIKEY}&units=${units}`;
    const response = await fetch(URL);
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(`API Error: ${err}`);
  }
};
