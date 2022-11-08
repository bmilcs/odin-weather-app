import * as API from "./api";
import * as UI from "./ui";

export const start = async () => {
  const weatherData = await getWeatherData();
  const weatherObj = processRawData(weatherData);
  UI.renderWeather(weatherObj);
};

const getWeatherData = async () => {
  const key = "bmilcs-weather";
  try {
    // dev purposes: use cached json if available
    const isCached = localStorage.getItem(key) !== null;
    if (isCached) return JSON.parse(localStorage.getItem(key));

    // retrieve fresh data via api
    console.log("Not cached.");
    const weatherObj = await API.getWeatherByCityName("Springfield, MA USA");
    localStorage.setItem("bmilcs-weather", JSON.stringify(weatherObj));
    return weatherObj;
  } catch (err) {
    console.error(`APP.getWeatherData() ERROR: ${err}`);
  }
};

const processRawData = (json) => {
  return new Weather(json);
};

class Weather {
  constructor(obj) {
    // console.log(obj);
    // location
    this.location = `${obj.name}, ${obj.sys.country}`;

    // description
    this.weather = obj.weather[0].description.toUpperCase();
    this.humidity = `${obj.main.humidity}%`;

    this.imageURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    // temp
    this.tempFeelsLike = this.formatTemp(obj.main.feels_like);
    this.tempCurrent = this.formatTemp(obj.main.temp);
    this.tempMax = this.formatTemp(obj.main.temp_max);
    this.tempMin = this.formatTemp(obj.main.temp_min);
  }
  formatTemp(temp) {
    return `${temp.toFixed(0)}°`;
  }
}
