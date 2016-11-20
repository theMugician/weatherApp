import React, { Component } from 'react';
import { connect } from 'react-redux';
import Time from 'react-time';
import moment from 'react-moment';

class WeatherForecast extends Component {
  componentDidUpdate() {
    this.props.getBgColor(this.appColor(this.props.weather));
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.weather === 'undefined'){
      return true
    }
    return this.props.weather !== nextProps.weather
  }

  displayIcon(weatherData) {
    let weather = weatherData.list[0].weather[0].main;
    weather = weather.toLowerCase();
    if (weather.indexOf("snow") > -1) {
        return "snow";
    }
    if (weather.indexOf("rain") > -1) {
        return "rain";
    }
    if (weather.indexOf("cloud") > -1) {
        return "cloudy";
    }
    if (weather.indexOf("clear") > -1) {
        return "day-sunny";
    }
    if (weather.indexOf("fog") > -1) {
        return "fog";
    }
    return "day-sunny";
  }

  displayCity(weatherData) {
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

  appColor(weatherData) {
    console.log("app color working");

    let temp = 0;
    if ( typeof weatherData === 'undefined' || weatherData === null ) {
      return 'app-bg1';
    }
    temp = Math.round(weatherData.list[0].main.temp - 273.15);
    if (temp <= -30) {
        return "app-bg1";
    }
    if (temp >= -29 && temp <= -21) {
        return "app-bg2";
    }
    if (temp >= -20 && temp <= -11) {
        return "app-bg3";
    }
    if (temp >= -10 && temp <= 4) {
        return "app-bg4";
    }
    if (temp >= 5 && temp <= 15) {
        return "app-bg5";
    }
    if (temp >= 16 && temp <= 24) {
        return "app-bg6";
    }
    if (temp >= 25 && temp <= 32) {
        return "app-bg7";
    }
    if (temp >= 33 && temp <= 38) {
        return "app-bg8";
    }
    if (temp >= 39) {
        return "app-bg9";
    }
  }

  render() {
    let now = new Date();
    if(!this.props.weather){
      return <div className="text-center col-xs-12"><h1> Please choose a city</h1></div>;  
    }

    return (
      <div className="text-center col-xs-12">
         <h1 id="temp"><span className={"wi wi-main wi-" + this.displayIcon(this.props.weather)}>
         </span>&nbsp;{this.displayTemp(this.props.weather)}<sup>&deg;</sup></h1>
         <h1>{this.displayCity(this.props.weather)}</h1> 
         <h2><Time value={now} format="HH:mm" /></h2>
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
