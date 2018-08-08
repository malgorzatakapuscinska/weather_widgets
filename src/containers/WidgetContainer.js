import React, {Component} from 'react';
import WidgetForm from '../components/WidgetForm';
import WidgetData from '../components/WidgetData';

class WidgetContainer extends Component {
  constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    const cityName = this.props.city.name.toLowerCase();
    const cityWoeid = this.props.city.woeid;
    console.log(cityName);
    const URL = 'https://www.yahoo.com/news/weather/poland/' + cityName +  '/' + cityName + '-' + cityWoeid;
    window.open(URL);
  }

  render () {
    console.log(this.props);
    return (
      <div className="widgetContainer" onClick={this.handleClick}>
        <WidgetForm onWidgetFormSubmit={this.props.onWidgetFormSubmit} />
        <WidgetData city={this.props.city}/>
      </div>
    );
  }
}

export default WidgetContainer;
