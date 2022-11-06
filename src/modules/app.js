import * as API from "./api";
import * as UI from "./ui";

export const start = async () => {
  UI.render();
  const weatherObj = await getWeatherJSON();
  console.log(weatherObj);
};

// retrieve JSON from localStorage (prevent excessive api calls)
// or get it from API --- for dev purposes
const getWeatherJSON = async () => {
  try {
    let jsonData;
    const isCached = localStorage.getItem("bm-weather-app") !== null;
    if (!isCached) {
      console.log("Not cached.");
      jsonData = await API.getWeatherByCityName("Springfield, MA USA");
      localStorage.setItem("bm-weather-app", JSON.stringify(jsonData));
    } else {
      console.log("Is cached!");
      jsonData = await JSON.parse(localStorage.getItem("bm-weather-app"));
    }
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};

const processWeatherJSON = async (json) => {};
