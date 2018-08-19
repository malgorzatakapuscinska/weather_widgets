import React from 'react';
import WidgetForm from '../components/WidgetForm';
import WidgetData from '../components/WidgetData';

class WidgetContainer extends React.Component {
  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    event.stopPropagation();
    window.open(this.props.city.url);
  }

  render () {
    return (
      <div className="widgetContainer" onClick={this.handleClick}>
        <WidgetForm cityId={this.props.city.id} />
        <WidgetData city={this.props.city}/>
      </div>
    );
  }
}

export default WidgetContainer;
