import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

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
                <NavLink exact activeClassName="selected" to="/">All images</NavLink>
                <NavLink exact activeClassName="selected" to="/add_photo"> + Add photo</NavLink>
                <span className='separator'></span>
                {links.map((link, idx) => <NavLink activeClassName="selected" key={idx} to={`/${link}`}>{link}</NavLink>)}
            </nav>
        )
    }
}

export default Navigation