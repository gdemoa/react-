import React, { Component } from 'react';
import Display from './Display';
import './calc.css';

class Btn extends Component {

  constructor(props){
    super();
    this.val= props.val;
    //this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {

  }

  // calculate(e){
  //   alert();
  // }

  render() {
    return (
      <div className="square" value={this.props.val} onClick={this.props.onClick}>
        {this.val}
      </div>
    );
  }
}

export default Btn;
