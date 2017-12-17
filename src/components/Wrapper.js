import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Navigation from './Navigation'
import Content from './Content'

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={() => <div>Work</div>}/>
                            <Route path="/:label" component={Content}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Wrapper