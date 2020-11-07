import React from 'react';
import './App.css';
import './crt.css';
import BackgroundImage from "./BackgroundImage";
import Weather from "./Weather";
import DateTime from "./DateTime";

const oneSecond = 1000;
const backgroundRefreshInterval = 30 * oneSecond;
const dateTimeWidgetRefreshInterval = oneSecond;
const weatherRefreshInterval = 7200 * oneSecond;

const App = () => {
  return <div className={"Grid"}>
    <div className={"crtFilter"} />
    <div className={"Shadow"} />
    <BackgroundImage refreshInterval={backgroundRefreshInterval} />
    <div className={"Info"}>
      <DateTime dateTimeWidgetRefreshInterval={dateTimeWidgetRefreshInterval} />
      <Weather refreshInterval={weatherRefreshInterval} />
    </div>
  </div>;
}
  ;

export default App;
