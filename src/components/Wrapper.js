import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Navigation from './Navigation'
import Content from './Content'
import Form from './Form'

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={Content}/>
                            <Route path='/add_photo' component={Form}/>
                            <Route path="/:label" component={Content}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Wrapper