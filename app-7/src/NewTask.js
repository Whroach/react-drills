import React, {Component} from 'react'




export default class NewTask extends Component{
    constructor(props){
        super(props)

        this.state = {
            inputTask: ""
        }
    };


    handleChange = (value) => {
        this.setState({inputTask: value})

    }

    handleSubmit = () => {
        this.props.saveTask(this.state.inputTask)
        this.setState({inputTask: ""})

    }



    render() {
        return(
            <div>
                <h1>My to-do list:</h1>
                <input value={this.state.inputTask} placeholder="Enter new task" onChange={element => this.handleChange(element.target.value)}/>
                <button onClick={this.handleSubmit}>ADD ITEM</button>






            </div>
        )
    }



};