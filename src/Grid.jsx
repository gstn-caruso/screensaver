import React from "react";
import DateTime from "./DateTime";
import BackgroundImage from "./BackgroundImage";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: '' };
  }

  clientResolution = () => `${window.innerWidth}x${window.innerHeight}`;

  apiPath = () => `https://source.unsplash.com/random/${this.clientResolution()}`;

  fetchImage = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const responseURL = xhr.responseURL;
      this.setState({imageUrl: responseURL});
    });

    xhr.open('GET', this.apiPath());
    xhr.send()
  };

  componentDidMount() {
    this.fetchImage();
    setInterval(this.fetchImage, this.props.backgroundRefreshInterval);
  }

  render() {
    return (
      <section className={"Grid"}>
        <BackgroundImage imageUrl={this.state.imageUrl} />
        <DateTime dateTimeWidgetRefreshInterval={this.props.dateTimeWidgetRefreshInterval} />
      </section>
    );
  }
}
