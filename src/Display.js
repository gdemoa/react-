import React, { Component } from 'react';
import Btn from './Button';
import './calc.css';

class Display extends Component {

  constructor(props){
    super();
    this.state = {output:props.output}; 
  }

  componentDidMount() {

  }

  render() {
 
    return (
        <div className="display">
        {this.state.output}
        </div>
     );
  }
}

export default Display;
