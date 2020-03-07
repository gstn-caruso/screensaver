import React from "react";
import DateTime from "./DateTime";
import BackgroundImage from "./BackgroundImage";
import Weather from "./Weather";

export default class Grid extends React.Component {
  render() {
    return (
      <section className={"Grid"}>
        <div className={"Shadow"} />
        <BackgroundImage refreshInterval={this.props.backgroundRefreshInterval} />
        <section className={"Info"}>
          <Weather />
          <DateTime dateTimeWidgetRefreshInterval={this.props.dateTimeWidgetRefreshInterval} />
        </section>
      </section>
    );
  }
}
