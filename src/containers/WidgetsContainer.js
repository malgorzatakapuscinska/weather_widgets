import React from 'react';
import WidgetContainer from './WidgetContainer';
import { hot } from 'react-hot-loader';

function WidgetsContainer (props) {
  console.log(props);
  const cities = props.cities.map((city) =>  (
    <WidgetContainer key={city.id} city={props.city}/>
  ))
  console.log(cities);
  return (
      <div>{cities}</div>
  );
};

export default WidgetsContainer;
