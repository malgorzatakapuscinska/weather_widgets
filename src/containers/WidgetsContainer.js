import React from 'react';
import WidgetContainer from './WidgetContainer';

const WidgetsContainer =  props => {
    return (
      props.cities.map((city) =>  (
        <WidgetContainer key={city.id} city={city}/>
      ))
    );
};

export default WidgetsContainer;
