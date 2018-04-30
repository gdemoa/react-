import React, { Component } from 'react';
import Todolist from './todolist';
import  './todo.css';

// const todolist = (props)=>{
//   // let list='';
//   // props.list.forEach((i,e)=>{
//   //   list+= '<li>a</li>'; 
//   // })
//   //   return(<li>a</li>)
//   render(){
//     return (<h1>{{this.props.list}}</h1>);
//   }
// }


class Todo extends Component {

  constructor(props){
    super(props);
    this.state={value:'',todo:['asd']}
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
    
  }

  componentDidMount() {

  }

  todo(){
    return(<ul>sdfds</ul>);
  }

  submit(e)
  {
    e.preventDefault();
    // var newState = [];
    this.state.todo.push(this.state.value);
    this.setState({
      todo:this.state.todo
    });
    console.log(this.state);
  }

  removeTask(e){

  }

  inputChange(e){
    this.setState({value:e.target.value})  
  }

  render() {
    // console.log(this.state.todo);
    return (
      <div className="parent">
        <form className="todo-form" method="GET" action="" onSubmit={this.submit}>
          <div className='input'>
            <input type="text" value={this.state.value} placeholder="enter task .." onChange={this.inputChange}/>
          </div>
        </form>  
        <div className="todo-box">
          <div className="task">
            <ul>
            // {
              // this.state.todo.map((val,i)=>{
                // <h1 key={i}>{val}</h1>
              <Todolist list={this.state.todo}/>
              // })
            }
            </ul>
            <span className="delete" onClick={this.removeTask}>remove me</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;