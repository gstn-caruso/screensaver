import React from "react";

export default class DateTime extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  currentDate = () => {
    return this.state.date.toDateString();
  };

  currentTime = () => {
    return `${this.state.date.getHours()}:${this.state.date.getMinutes()}`;
  };

  componentDidMount() {
    const updateTime = () => this.setState({date: new Date()});
    setInterval(updateTime, this.props.dateTimeWidgetRefreshInterval);
  }

  render() {
    return (
      <section className={"DateTime"}>
        <p>{this.currentTime()}</p>
        <p>{this.currentDate()}</p>
      </section>
    );
  }
}