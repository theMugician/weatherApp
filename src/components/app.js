import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherForecast from '../containers/weather_forecast';

export default class App extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="col-xs-3 temp-buttons">
              {/* 
              <SwitchUnits /> 
              */}
            </div>
            <div className="col-xs-9">
              <SearchBar />
            </div>
          </div>{/* row-end */} 
          {/* row-start */}
          <div className="row">
            <div className="col-xs-12 text-center">
              <WeatherForecast />
            </div>
          </div> 
          {/* row-end */}  
      </div>
    );
  }
}