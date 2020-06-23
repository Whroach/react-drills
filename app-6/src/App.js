import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      addTask: "",
      storeTask: [] ,
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleStore = this.handleStore.bind(this);

  };

  handleAdd = (value) => {
    this.setState({addTask: value})

  }

  handleStore =(value) => {
    this.setState({
      storeTask: [...this.state.storeTask, this.state.addTask], //save everything in storeTask PLUS the newly added item
      addTask: "" //reset addTask for new entry
    })
  }

  render(){
    let listItems = this.state.storeTask.map((element,index,array) => {
      return <Todo key={index} task={element} /> //Sending data down to child component Todo and giving the index and element values names to reference
    })
    return(
      <div>
        <h1>The Greatest To-Do List Ever Made:</h1>
        <div>
          <input value={this.state.input} placeholder="Enter new task" onChange={e => this.handleAdd(e.target.value)}/>
          <button onClick={this.handleStore}>Add Item</button>
        </div>
        {listItems}







      </div>
    )
  };}
