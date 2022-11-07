import "../scss/index.scss";
import containerize from "./utils/containerize";
import makeElement from "./utils/make-element";

export const renderWeather = (obj) => {
  console.log(obj);

  const leftColumn = containerize(
    "left-col",
    makeElement("img", "weather-img", "Weather Icon", "", obj.imageURL)
  );

  const rightColumn = containerize(
    "right-col",
    makeElement("h2", "location", obj.location),
    makeElement("h1", "temp-current", obj.tempCurrent),
    makeElement("h3", "description", obj.weather),
    makeElement("p", "temp-other", `Min: ${obj.tempMin}`),
    makeElement("p", "temp-other", `Max: ${obj.tempMax}`),
    makeElement("p", "humidity", `Humidity: ${obj.humidity}`)
  );

  const container = containerize("weather-container", leftColumn, rightColumn);

  document.querySelector("body").appendChild(container);
};
