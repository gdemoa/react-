import React, { Component } from 'react';
import Display from './Display';
import Btn from './Button';
import './calc.css';

class Calculator extends Component {

  constructor(){
    super();
    this.state = {buffer:[],result:0};
    this.calculate = this.calculate.bind(this);
  }

  giveResult(){

    var op = this.state.buffer.filter((v)=>{
      return isNaN(v);
    });

    var no = this.state.buffer.filter((v)=>{
      return !isNaN(v);
    });

    //var no = this.state.buffer.join().match(/\d+/g).map(Number);    

    alert(JSON.stringify(no));

    for(var i=0;i<no.length;i++){
      op.map((val)=>{
        switch(val){
          case '+':
            this.state.result = parseInt(no[i])+parseInt(this.state.result);   
            break;  
          case '-':
            this.state.result = parseInt(this.state.result) - parseInt(no[i]);   
            break;    
          default :
            break;
        }
      });
    }



    this.setState({
      buffer:this.state.result
    })

    console.log(this.state)
  }

  calculate(e){
    const val = e.target.getAttribute("value");  

    switch(val){
      case '=':
        this.giveResult();   
        break;  
      default :
        this.state.buffer.push(val);
        this.setState({
          buffer:this.state.buffer
       })
    }

    console.log(this.state);
  }

  getOutput(){
    return this.state.buffer.join();
  }

  componentDidMount() {

  }

  render() {
    return (<div className="calculator">
                <div className="row">
                  <Btn val={"+"} onClick={this.calculate}/>
                  <Btn val={"="} onClick={this.calculate}/>
                  <Btn val={"-"} onClick={this.calculate}/>
                  <Btn val={"1"} onClick={this.calculate}/>
                  <Btn val={"2"} onClick={this.calculate}/>
                  <Btn val={"3"} onClick={this.calculate}/>
                  <Btn val={"4"} onClick={this.calculate}/>
                  <Btn val={"5"} onClick={this.calculate}/>
                  <Btn val={"6"} onClick={this.calculate}/>
                  <Btn val={"7"} onClick={this.calculate}/>
                  <Btn val={"8"} onClick={this.calculate}/>
                  <Btn val={"9"} onClick={this.calculate}/>
                  <Btn val={"0"} onClick={this.calculate}/>
                  <div className="display">{this.state.buffer}</div>
                </div> 
            </div>
          );
  }
}

export default Calculator;
