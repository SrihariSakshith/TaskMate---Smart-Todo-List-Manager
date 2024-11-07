import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  return (
    <>
    <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        {props.searchBar?<div className="search-container">
            <input type="text" placeholder="Search..." className="search-bar"/>
            <button className="search-button">🔍</button>
        </div>:"No search bar"}
        <div className="hamburger" id="hamburger">
            &#9776; 
        </div>
    </nav>
    </>
  )
}
Header.defaultProps={
    title:"Hi",
    searchBar:true
}

Header.propTypes={
    title:PropTypes.string,
    // searchBar:PropTypes.bool.isRequired
}