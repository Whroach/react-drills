import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

export default class App extends Component {
  constructor(){
    super()

    this.state={
      addTask: "",
      storeTask: [] ,
    }

  };

  handleAdd = (value) => {
    this.setState({addTask: value})

  }

  handleStore =(value) => {
    this.setState({storeTask: value})
  }

  render(){
    return(
        <div>
          <input onChange ={e => this.handleAdd(e.target.value)}></input>
          <button onClick ={e => this.handleStore(e.target.value)}>Add</button>
          <ul>{}</ul>

        </div>
    )
  };}
