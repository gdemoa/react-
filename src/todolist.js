import React, { Component } from 'react';

export default class Todolist extends Component {

  constructor(props){
    super();
     this.list = props.list;
     console.log(this.list);
  }  

  render(){
    return (this.list.map((item, index) => <li key={index}>{item}</li>));
  }
}