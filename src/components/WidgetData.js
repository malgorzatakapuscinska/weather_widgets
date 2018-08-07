import React from 'react';
import { hot } from 'react-hot-loader';

const WidgetData = props => {
  console.log(props);

  return (
    <div>
      <p>{props.city.data}</p>
      <p>{props.city.time}</p>
      <p>{props.city.temperature}</p>
      <p>{props.city.humidity}</p>
      <p>{props.city.wind}</p>
      <img src={props.city.icon}></img>
    </div>
  );
};

export default WidgetData;
