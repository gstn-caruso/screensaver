import React from "react";

export default class DateTime extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  currentTime = () => {
    const timeFormat = { hour12: false, hour: "numeric", minute: "numeric" };
    return `${this.state.date.toLocaleTimeString('en-US', timeFormat)}`;
  };

  componentDidMount() {
    const updateTime = () => this.setState({date: new Date()});
    setInterval(updateTime, this.props.dateTimeWidgetRefreshInterval);
  }

  render() {
    return <p className={"DateTime"}>{this.currentTime()}</p>;
  }
}