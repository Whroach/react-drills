import React, {Component} from 'react'


class Login extends Component{

    constructor(){
        super();

        this.state = {
            userName: "",
            passWord: ""
        };
        this.handleUser = this.handleUser.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    handleUser = (value) => {
        this.setState({userName: value})
    };

    handlePassWord = (value) => {
        this.setState({passWord: value})
    };

    handleLogin = () => {
        alert(' Username: ' + this.state.userName + " " +'Password:' + this.state.passWord);

    }


render(){
    return(
        <div>
            <input type = "text" onChange={element => this.handleUser(element.target.value)}/>
            <input type="text" onChange={element => this.handlePassWord(element.target.value)}/>
            <button onClick={this.handleLogin}>Login</button>
            <img src="https://wallpaperplay.com/walls/full/b/b/7/148338.jpg" alt="background image" ></img>
        </div>
        

    )
}


};


export default Login
