import React, { Component } from 'react';
import { connect } from 'react-redux';
import Time from 'react-time';
import moment from 'react-moment';

class WeatherForecast extends Component {
  

  
  //const temps = this.props.weather.main.temp;
  //const pressures = this.props.weather.main.pressure;
  //const humidities = this.props.weather.main.humidity;

  displayCity(weatherData) {
     console.log(this.props.weather);
    console.log(weatherData);
    if ( typeof weatherData === 'undefined' || weatherData === null ) {
        return '';
    } else {
        return weatherData.city.name;
    }
  }

  displayTemp(weatherData) {
    
    let current_temp = 0;

    //current_temp = Math.round(weatherData.list[0].main.temp - 273.15);
    
    if ( typeof weatherData === 'undefined' || weatherData === null ) {
        return '';
    }

    if (this.props.temp.temp_unit === 'C') {
        current_temp = Math.round(weatherData.list[0].main.temp - 273.15);
    }

    if (this.props.temp.temp_unit === 'F') {
        current_temp = Math.round((weatherData.list[0].main.temp) * 9/5 - 459.67);
    }

    const output_str = current_temp;
    return output_str;
  
    //return current_temp;
  }

  render() {
    let now = new Date();
    if(!this.props.weather){
      return <div className="text-center col-xs-12"><h2> Please choose a city</h2></div>;  
    }

    return (
      <div className="text-center col-xs-12">
        {/* <h2>Current Temperature (&deg; {this.props.temp.temp_unit})</h2> */}
         <h1 id="temp">{this.displayTemp(this.props.weather)}<sup>&deg;</sup></h1>
         <h1>{this.displayCity(this.props.weather)}</h1> 
         <h2><Time value={now} format="HH:mm" /></h2>
        {/* <h2>Units: {this.props.temp.temp_unit}</h2> */}
	  </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    weather: state.weather,
    temp: state.temp
  };
}

// Connect state to props within WeatherList
export default connect(mapStateToProps)(WeatherForecast);
