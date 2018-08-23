import React from 'react';

const WidgetData = props => {
  console.log(props);

  return (
    <div>
      <p>{props.city.date}</p>
      <p>{props.city.time}</p>
      <p>{props.city.temperature}</p>
      <p>{props.city.humidity}</p>
      <img src={props.city.icon}></img>
    </div>
  );
};

export default WidgetData;
