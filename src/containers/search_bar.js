import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { location: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onInputChange(event) {
    console.log(event);
  }

  onSelection(event) {
    console.log('Selected Coords: ', event.location);

    // Fetch weather data
    this.props.fetchWeather(event.location);

    // Clear the geosuggest box by accessing the clear method of Geosuggest on this instance
    this.refs.geosuggest_component.clear();
  }

  render() {
    return (
    <div>
      <Geosuggest
        placeholder = "Get current temperatures in your favorite cities"
        initialValue = {this.state.location}
        onChange = {this.onInputChange}
        onSuggestSelect = {this.onSelection}
        // Name a calling reference
        ref = 'geosuggest_component'
      />
    </div>
    );
  }
}

// Set the fetchWeather action creator to be available on props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);