import React from 'react';
import './App.css';
import Grid from "./Grid";

const oneSecond = 1000;
const oneMinute = 10 * oneSecond;

const backgroundRefreshInterval = oneMinute;
const dateTimeWidgetRefreshInterval = oneSecond;

const App = () => <Grid
  backgroundRefreshInterval={backgroundRefreshInterval}
  dateTimeWidgetRefreshInterval={dateTimeWidgetRefreshInterval}
/>;

export default App;
