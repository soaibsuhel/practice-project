import React, { Component } from 'react'

export default class Login extends Component {

    login = () => {

        sessionStorage.setItem("userName", "suhel")
    }
    logout = () => {

        sessionStorage.clear()
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        )
    }
}
