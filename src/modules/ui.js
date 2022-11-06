import "../scss/index.scss";

export const render = () => {
  const h1 = document.createElement("h1");
  document.querySelector("body").appendChild(h1);
  h1.textContent = "Weather App";
};
