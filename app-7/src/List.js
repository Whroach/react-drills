import React, {Component} from 'react'
import Todo from './Todo'


export default class List extends Component{

    render() {

        let listItems = this.props.storeTask.map((element,index) => {
            return <Todo key={index} task={element} /> //Sending data down to child component Todo and giving the index and element values names to reference
          })
        return(
            <div>{listItems}</div>
        )
    }



};