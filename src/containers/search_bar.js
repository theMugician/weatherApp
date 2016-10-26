import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

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

export default SearchBar;