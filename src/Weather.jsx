import React from "react";

export default class Weather extends React.Component {
  apiKey = process.env.REACT_APP_WAPI_KEY;

  constructor(props) {
    super(props);
    this.state = {temperature: 0, iconUrl: ''}
  }

  componentDidMount() {
    this.fetchTemperature()
  }

  humanize = (str) => {
    return str
      .replace(/^[\s_]+|[\s_]+$/g, '')
      .replace(/[_\s]+/g, ' ')
      .replace(/^[a-z]/, function (m) {
        return m.toUpperCase();
      });
  };

  fetchTemperature = () => {
    const currentCityName = "Buenos Aires";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=${this.apiKey}&units=metric`;
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
    return this.apiKey ?
      <section className={"Weather"}>
        <section className={"temperature"}>
          <img src={this.state.iconUrl}/>
          <p>{this.state.temperature}°C</p>
        </section>
      </section> : null
  }
}