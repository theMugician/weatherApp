import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    const output_str = current_temp + this.props.temp.temp_unit;
    return output_str;
  
    //return current_temp;
  }

  render() {
    if(!this.props.weather){
      return <h2> please choose a city</h2>;  
    }

    return (
      <div className="col-xs-12">
        {/* <h2>Current Temperature (&deg; {this.props.temp.temp_unit})</h2> */}
         <h2>City: {this.displayCity(this.props.weather)}</h2> 
        <h2>Temperature: {this.displayTemp(this.props.weather)}</h2>
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
