import React from "react";
import DateTime from "./DateTime";
import BackgroundImage from "./BackgroundImage";
import Weather from "./Weather";

export default class Grid extends React.Component {
  render() {
    return (
      <section className={"Grid"}>
        <BackgroundImage refreshInterval={this.props.backgroundRefreshInterval} />
        <section className={"Info"}>
          <DateTime dateTimeWidgetRefreshInterval={this.props.dateTimeWidgetRefreshInterval} />
          <Weather />
        </section>
      </section>
    );
  }
}
