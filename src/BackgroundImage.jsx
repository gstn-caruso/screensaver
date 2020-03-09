import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {last} from "underscore";

const Image = props => <img className={"BackgroundImage"} src={props.src}  alt="" />;

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: []}
  }

  clientResolution = () => `${window.innerWidth}x${window.innerHeight}`;

  apiPath = () => `https://source.unsplash.com/random/${this.clientResolution()}`;

  fetchImage = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const responseURL = xhr.responseURL;
      this.setState((prevState) => {return { images: prevState.images.concat(responseURL) }});
    });

    xhr.open('GET', this.apiPath());
    xhr.send()
  };

  images = () => last(this.state.images, 2).map(imageUrl => <Image key={imageUrl} src={imageUrl}/>);

  componentDidMount() {
    this.fetchImage();
    setInterval(this.fetchImage, this.props.refreshInterval);
  }

  render() {
    return <div className={"BackgroundImageContainer"}>
      <ReactCSSTransitionGroup transitionName="image"
                               transitionEnterTimeout={1000}
                               transitionLeaveTimeout={300}>
          {this.images()}
      </ReactCSSTransitionGroup>
    </div>
  }
}

export default BackgroundImage