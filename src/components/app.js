import React from 'react';
import { Component } from 'react';
import SwitchUnits from '../containers/switch_units';
import SearchBar from '../containers/search_bar';
import WeatherForecast from '../containers/weather_forecast';

export default class App extends Component {
  render() {
    return (
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
            
              <WeatherForecast />
            
          </div> 
          {/* row-end */}  
        </div>  
      </div>
     
    );
  }
}