import React, {Component} from 'react'
import App from './App'
import { render } from '@testing-library/react'







export default class Todo extends Component{

          render() {
              return(
                  <p>{this.props.task}</p>
              )
          }



    };




