import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const links = [
    "Airplane",
    "Automobile",
    "Bird",
    "Cat",
    "Deer",
    "Dog",
    "Frog",
    "Hourse",
    "Ship",
    "Truck"
]

class Navigation extends Component {
    render() {
        return (
            <nav className='Navigation'>
                <Link to="/">Add photo</Link>
                <Link to="/all_photo">All photo</Link>
                {links.map((link, idx) => <Link key={idx} to={`/${link}`}>{link}</Link>)}
            </nav>
        )
    }
}

export default Navigation