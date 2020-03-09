import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, iconUrl: ''}
  }

  componentDidMount() {
    this.fetchTemperature()
  }

  fetchTemperature = () => {
    const currentCityName = "Buenos Aires";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=${process.env.REACT_APP_WAPI_KEY}&units=metric`;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);

      const temperature = Math.floor(response.main.feels_like);
      const iconUrl = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

      this.setState({
        temperature: temperature,
        iconUrl: iconUrl
      })
    });

    xhr.open('GET', apiUrl);
    xhr.send();
  };

  render() {
    return <div className={"Weather"}>
        <div className={"temperature"}>
          <img alt="weather icon" src={this.state.iconUrl}/>
          <p>{this.state.temperature}°C</p>
        </div>
      </div>
  }
}