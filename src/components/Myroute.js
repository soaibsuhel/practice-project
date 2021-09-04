import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/Page1" component={Page1} />
                    <Route exact path="/Page2" component={Page2} />
                    <Route exact path="/Page3 " component={Page3} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        )
    }
}
