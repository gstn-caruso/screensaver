import React from "react";

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: ''}
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
    return <img className={"BackgroundImage"} src={this.state.imageUrl}/>

  }
}

export default BackgroundImage