import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to='/ok'>Wrapper</Link>
            </nav>
        )
    }
}

export default Navigation