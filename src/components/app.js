import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';

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
          {/* row-start
          <div className="row">
            <div className="col-xs-12 text-center">
              <WeatherList />
            </div>
          </div> 
          row-end */}  
      </div>
    );
  }
}