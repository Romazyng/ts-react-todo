import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav>
        <div className="nav-wrapper cyan lighten-1 px1">
        <NavLink to="/" className="brand-logo">TodoList</NavLink>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Tasks</NavLink></li>
            <li><NavLink to="/about">Information</NavLink></li>
          </ul>
        </div>
    </nav>
)