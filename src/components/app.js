import React from 'react';
import { Component } from 'react';
import SwitchUnits from '../containers/switch_units';
import SearchBar from '../containers/search_bar';
import WeatherForecast from '../containers/weather_forecast';
//import Background from '../containers/background';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { appColorClass: 'app-bg1' };
  }

  setAppColor(colorClass) {
    this.setState({ appColorClass: colorClass });
  }

  render() {
    return (
    <div className={"app-container " + this.state.appColorClass}>
      <div id="top">
          <div className="row">
            <div className="col-xs-3 temp-buttons">
              
              <SwitchUnits /> 
              
            </div>
            <div className="col-xs-9">
              <SearchBar />
            </div>
          </div>{/* row-end */} 

        <div id="main">  
          {/* row-start */}
          <div className="main-wrapper">
            
              <WeatherForecast getBgColor={color => this.setAppColor(color)} />
            
          </div> 
          {/* row-end */}  
        </div>  
      </div>
          
    </div>  
        
    );
  }
}