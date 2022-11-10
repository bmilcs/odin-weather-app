// according to the project instructions, sharing this api key is
// perfectly okay because it is publicly available & there is no consequence
// for exposing it.

const APIKEY = "573f3a6ef58e78ac80754a1709cc780b";

export const getWeatherByZipCode = (zipCode, units = "imperial") => {
  const parsedZipCode = zipCode.trim().replace(/\s+/gi, "%20");
  const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${parsedZipCode}&appid=${APIKEY}&units=${units}`;
  return fetch(URL, { mode: "cors" })
    .then((res) => {
      if (res.ok) return res.json();
      return;
    })
    .catch((e) => e);
};
