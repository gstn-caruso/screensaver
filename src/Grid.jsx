import React from "react";
import DateTime from "./DateTime";
import BackgroundImage from "./BackgroundImage";

export default class Grid extends React.Component {
  render() {
    return (
      <section className={"Grid"}>
        <BackgroundImage refreshInterval={this.props.backgroundRefreshInterval} />
        <DateTime dateTimeWidgetRefreshInterval={this.props.dateTimeWidgetRefreshInterval} />
      </section>
    );
  }
}
