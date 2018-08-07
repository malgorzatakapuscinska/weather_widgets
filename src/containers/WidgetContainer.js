import React from 'react';
import WidgetForm from '../components/WidgetForm';
import WidgetData from '../components/WidgetData';

class WidgetContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log(props);
    return (
      <div>
        <WidgetForm />
        <WidgetData />
      </div>
    );
  }
}
