import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchTempUnits } from '../actions/index';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

class SwitchUnits extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.switchTemp = this.switchTemp.bind(this);
  }

  switchTemp(event) {
    let tempUnit = '';
    console.log('switchTemp()');
    //console.log(' toggle state: ' this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
    if (this.state.checked === true){
      tempUnit = 'C';  
    }else{
      tempUnit = 'F';  
    }
    this.props.switchTempUnits(tempUnit);
    
  }

  render () {
    return (
      <div>
        <input id="temp-switch" className="temp-toggle" type="checkbox" 
          onChange={this.switchTemp}
          checked={this.state.checked}
        />
        <label style={{color: '#000000'}} className="toggle-color1" htmlFor="temp-switch"></label>
      </div>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchTempUnits }, dispatch);
}

export default connect(null, mapDispatchToProps)(SwitchUnits);

