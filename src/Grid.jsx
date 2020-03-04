import React from "react";
import DateTime from "./DateTime";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImageUrl: '' };
  }

  clientResolution = () => `${window.innerWidth}x${window.innerHeight}`;

  apiPath = () => `https://source.unsplash.com/random/${this.clientResolution()}`;

  fetchImage = () => {
    return fetch(this.apiPath())
      .then(({url}) => this.setState({ backgroundImageUrl: url }))
  };

  componentDidMount() {
    this.fetchImage();
    setInterval(this.fetchImage, this.props.backgroundRefreshInterval);
  }

  render() {
    return (
      <section style={{backgroundImage: `url(${this.state.backgroundImageUrl})`}} className={"Grid"}>
        <DateTime
          dateTimeWidgetRefreshInterval={this.props.dateTimeWidgetRefreshInterval}
        />
      </section>
    );
  }
}
