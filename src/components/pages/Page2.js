import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Page2 extends Component {

    render() {

        if (sessionStorage.getItem("userName") == null) {
            return <Redirect to="/login" />
        }

        else {
            return (
                <div>
                    <h1>Page 2</h1>
                </div>
            )

        }

    }
}
