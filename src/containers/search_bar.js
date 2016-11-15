import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  componentDidMount() {
    // findDOMNode returns an HTMLElement
    console.log(this);
    const node = ReactDOM.findDOMNode(this.refs.geosuggest_component);
    // Then search the label
    const label = node.querySelector('label');
    // Now, you can do anything you want with label
    /*
    label.addEventListener('click', function() { 
      console.log(this);
      console.log('clicked'); 
      this.toggleSearch() 
    }).bind(this);
    */
    label.addEventListener('click', () => this.toggleSearch()) 
  }
  constructor(props) {
    super(props);

    this.state = { location: '', expand: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelection = this.onSelection.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  onInputChange(event) {
    console.log(event);
  }

  toggleSearch(event) {
    console.log('its being called');
    if (this.state.expand === ''){
        this.setState({expand: 'expand'});
            setTimeout(() => {
              this.setState({expand: 'expanded'});
            },800)
        } else {
            this.setState({expand: 'contract'});
            setTimeout(() => {
              this.setState({expand: ''});
            },800)
            this.refs.geosuggest_component.clear();
        }
       
    //this.setState({ expand: 'expand' });
    //console.log(event);
  }

  onSelection(event) {
    console.log('Selected Coords: ', event.location);

    // Fetch weather data
    this.props.fetchWeather(event.location);

    // Clear the geosuggest box by accessing the clear method of Geosuggest on this instance
    this.refs.geosuggest_component.clear();

    this.toggleSearch();
  }

  render() {
    return (
    <div>
      <Geosuggest
        id = "searchbar"
        label = " "
        placeholder = ""
        initialValue = {this.state.location}
        onChange = {this.onInputChange}
        onSuggestSelect = {this.onSelection}
        //onKeyPress = {this.toggleSearch}
        /*onClick = {this.toggleSearch}*/
        className = {this.state.expand}
        inputClassName = {this.state.expand}
        onCLickLabel = {this.toggleSearch}
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