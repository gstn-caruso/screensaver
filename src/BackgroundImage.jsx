import React from "react";
import CrossfadeImage from "./CrossfadeImage";

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: ""}
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
    setInterval(this.fetchImage, this.props.refreshInterval);
  }

  render() {
    return <CrossfadeImage
      src={this.state.imageUrl}
      containerClass={"BackgroundImageContainer"}
    />
  }
}

export default BackgroundImage