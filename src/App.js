import React, { Component } from 'react';
import logo from './logo.svg';
import Comp1 from './component1';
import './App.css';

const abc = 'this is text';
class App extends Component {

  constructor(){
    super();
    this.state={count:0, name:'sanjay'}
  }

  componentDidMount() {

  }

  

  render() {

    // setTimeout(()=>{
    //   this.setState({
    //     count:this.state.count+1

    //   })
    // },1000)

    // setTimeout(()=>{
    //   if(this.state.name=='sanjay'){
    //     this.setState({
    //       name:'ajay'    
    //     })
    //   }
    //   else
    //   {
    //     this.setState({
    //       name:'sanjay' 
    //     })
    //   }  
    // },3000)

    return (
      <div className="parent">
        <form className="todo-form" method="GET" action="" onSubmit={this.submit}>
          <div className='input'>
            <input type="text" value="" placeholder="enter task ."/>
          </div>
        </form>  
        <div className="todo-box"></div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <Comp1 />
      //   </header>
      //   <p>{this.state.nwame}</p>
      //   <p className="App-intro">
      //     {this.state.count}
      //   </p>
      // </div>
    );
  }
}

export default App;
