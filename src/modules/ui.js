import "../scss/index.scss";
import containerize from "./utils/containerize";
import makeElement from "./utils/make-element";
import * as APP from "./app";

export const renderWeather = (obj) => {
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

export const renderForm = () => {
  const form = makeElement("form", "zipcode-form", "", "zipcode-form");
  form.addEventListener("submit", changeLocation);

  const inputLabel = makeElement("label", "input-label", "Zip Code:");
  inputLabel.htmlFor = "zipcode-input";

  const inputTextbox = makeElement(
    "input",
    "zipcode-input",
    "",
    "zipcode-input"
  );
  inputTextbox.required = true;

  const button = makeElement(
    "button",
    "change-zipcode-btn",
    "Submit",
    "change-zipcode-btn"
  );

  const inputContainer = containerize(form, inputLabel, inputTextbox, button);
  document.querySelector("body").appendChild(inputContainer);
};

const changeLocation = (e) => {
  e.preventDefault();
  const zip = e.target["zipcode-input"].value;
  APP.changeLocation(zip);
};

const clearWeather = () => {
  document.querySelector(".weather-container").remove();
};
