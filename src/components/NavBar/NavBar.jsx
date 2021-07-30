import "./NavBar.css";
import React, { Component } from "react";
import NavBarElements from "./NavBarElements";

// Horizontal Navigation Bar
class NavBar extends Component {
    render() {
        return (
        <nav className="NavBar">
            <h3 className="navbar-logo">AlgoVis<i className="fas fa-dragon"></i></h3>
            <ul className="navbar-menu">
                {NavBarElements.map((value, index) => {
                    return <li key={index}>
                            <a className={value.className} href={value.url}>{value.title}</a>
                           </li> 
                })}
            </ul>
        </nav>
        );
    }
};

export default NavBar;