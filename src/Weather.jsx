import React, {useEffect, useState} from "react";

function fetchWeatherReport() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const currentCityName = process.env.REACT_APP_CITY_NAME;
    const wapiKey = process.env.REACT_APP_WAPI_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=${wapiKey}&units=metric`;

    xhr.open('GET', apiUrl);

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };

    xhr.send();
  });
}

function parseWeatherResponse(textResponse) {
  const response = JSON.parse(textResponse);
  const temperature = Math.floor(response.main.feels_like);

  return {
    temperature: temperature,
  }
}

const Weather = ({refreshInterval}) => {
  const [temperature, setTemperature] = useState(null);

  function setWeather() {
    fetchWeatherReport().then(report => {
      const {temperature } = parseWeatherResponse(report);
      setTemperature(temperature);
    });
  }

  useEffect(() => {
    setWeather();
    const timeout = setTimeout(setWeather, refreshInterval);
    return () => clearTimeout(timeout)
  }, [refreshInterval])

  function render() {
    return <div className={"Weather"}>
      <div className={"temperature"}>
        <p>{temperature}°C</p>
      </div>
    </div>
  }

  return temperature ? render() : null
}

export default Weather;