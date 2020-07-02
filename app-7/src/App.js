import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import NewTask from './NewTask'
import List from './List'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      storedTasks: [] 
    }

    this.handleStore = this.handleStore.bind(this);

  };


  handleStore =(value) => {
    this.setState({
      storedTasks: [...this.state.storedTasks, value ] //save everything in storeTask PLUS the newly added item
    })
  }

  render(){

    return(
      <div>
        <div>
          <NewTask saveTask={this.handleStore}/>
          <List storeTask={this.state.storedTasks}/>
        </div>

      </div>
    )
  };}
