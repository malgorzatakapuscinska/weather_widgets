import React from 'react';
import WidgetForm from '../components/WidgetForm';
import WidgetData from '../components/WidgetData';

const WidgetContainer = props => {
  console.log(props);
  return (
    <div className="widgetContainer">
      <WidgetForm onWidgetFormSubmit={props.onWidgetFormSubmit} />
      <WidgetData city={props.city}/>
    </div>
  );
}

export default WidgetContainer;
