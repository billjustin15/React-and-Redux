import React from 'react'
import { Link, NavLink } from 'react-router-dom';   // this prevents the default action(refresh) from firing everytime you click a link
    // then change <a> tags into <Link to> tags
    // when you use NavLink, it adds a class element of "active"

const Navbar = _ => {
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar