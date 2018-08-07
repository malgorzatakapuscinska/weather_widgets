import React from 'react';
import WidgetContainer from './WidgetContainer';

const WidgetsContainer =  props => {
    console.log(props);
    return (
      props.cities.map((city) =>  (
        <WidgetContainer key={city.id} city={city} onWidgetFormSubmit={props.onWidgetFormSubmit} />
      ))
    );
};

export default WidgetsContainer;
