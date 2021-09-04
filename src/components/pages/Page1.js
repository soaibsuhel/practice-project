import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class Page1 extends Component {
    render() {
        if (sessionStorage.getItem("userName") == null) {
            return <Redirect to="/login" />
        }
        else {
            return (
                <div>
                    <h1>Page 1</h1>
                </div>
            )

        }

    }
}
