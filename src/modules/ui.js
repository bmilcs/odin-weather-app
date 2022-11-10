import "../scss/index.scss";
import "../scss/footer.scss";
import containerize from "./utils/containerize";
import makeElement from "./utils/make-element";
import * as APP from "./app";
import githubSVG from "../assets/github.svg";

export const renderLayout = () => {
  containerize(
    document.querySelector("body"),
    containerize(
      makeElement("header"),
      makeElement("h1", "page-title", "weather")
    ),
    makeElement("main"),
    prepareFooter()
  );
};

const prepareFooter = () => {
  const linkContainer = containerize(
    makeElement("a", "", "", "", "https://github.com/bmilcs/odin-weather-app"),
    makeElement("img", "github-svg", "GitHub Logo", "", githubSVG),
    makeElement("p", "footer-p", "bmilcs")
  );
  return containerize(makeElement("footer"), linkContainer);
};

export const renderWeather = (obj) => {
  const leftColumn = containerize(
    "left-col",
    makeElement("h1", "temp-current", obj.tempCurrent)
  );

  const rightColumn = containerize(
    "right-col",
    makeElement("h2", "location", obj.location),
    makeElement("h3", "description", obj.weather),
    makeElement("p", "humidity", `Humidity: ${obj.humidity}`),
    makeElement("p", "temp-other temp-min", `Min: ${obj.tempMin}`),
    makeElement("p", "temp-other temp-max", `Max: ${obj.tempMax}`),
    makeElement("img", "weather-img", "Weather Icon", "", obj.imageURL)
  );

  const container = containerize("weather-container", leftColumn, rightColumn);
  document.querySelector("main").appendChild(container);
};

export const renderForm = () => {
  const form = makeElement("form", "zipcode-form", "", "zipcode-form");
  form.addEventListener("submit", changeLocation);

  const inputLabel = makeElement("label", "input-label", "Location:");
  inputLabel.htmlFor = "zipcode-input";

  const inputTextbox = makeElement(
    "input",
    "zipcode-input",
    "",
    "zipcode-input"
  );
  inputTextbox.required = true;
  inputTextbox.placeholder = "90210";

  const button = makeElement(
    "button",
    "change-zipcode-btn",
    "Submit",
    "change-zipcode-btn"
  );

  const inputContainer = containerize(form, inputLabel, inputTextbox, button);
  document.querySelector("header").appendChild(inputContainer);
};

export const displayError = () => {
  const button = document.querySelector("button");
  button.classList.add("error");
  setTimeout(() => button.classList.remove("error"), 3000);
};

const changeLocation = (e) => {
  e.preventDefault();
  const zip = e.target["zipcode-input"].value;
  APP.changeLocation(zip);
};

export const clearWeather = () => {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
};
