import React, {Component} from 'react'
import {BrowserRouter as Router, Route ,Link, Switch} from 'react-router-dom'

import Navigation from './Navigation'

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/ok' component={() => <div>Work</div>}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Wrapper