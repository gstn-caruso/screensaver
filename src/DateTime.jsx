import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const timeFormat = { hour12: false, hour: "numeric", minute: "numeric" };
  return `${date.toLocaleTimeString('en-US', timeFormat)}`;
};

const DateTime = ({ dateTimeWidgetRefreshInterval }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => { setTime(new Date()) }, dateTimeWidgetRefreshInterval);
    return () => { clearTimeout(timeout) }
  }, [time, dateTimeWidgetRefreshInterval]);

  return <p className={"DateTime"}>{formatDate(time)}</p>;
}

export default DateTime;
