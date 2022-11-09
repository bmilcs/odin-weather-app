import * as API from "./api";
import * as UI from "./ui";

export const start = () => {
  UI.renderForm();
  changeLocation("90210");
};

export const changeLocation = async (zipCode) => {
  const weatherData = await API.getWeatherByZipCode(zipCode);
  console.log("app: ", weatherData);
  if (!weatherData) return;
  const weatherObj = processRawData(weatherData);
  UI.renderWeather(weatherObj);
};

const processRawData = (json) => {
  return new Weather(json);
};

class Weather {
  constructor(obj) {
    this.location = `${obj.name}, ${obj.sys.country}`;
    this.weather = obj.weather[0].description.toUpperCase();
    this.humidity = `${obj.main.humidity}%`;
    this.imageURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    this.tempFeelsLike = this.formatTemp(obj.main.feels_like);
    this.tempCurrent = this.formatTemp(obj.main.temp);
    this.tempMax = this.formatTemp(obj.main.temp_max);
    this.tempMin = this.formatTemp(obj.main.temp_min);
  }

  formatTemp(temp) {
    return `${temp.toFixed(0)}°`;
  }
}
