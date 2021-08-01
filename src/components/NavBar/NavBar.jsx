import "./NavBar.css"
import React, { useState } from "react"
import Dropdown from "../Dropdown/Dropdown"

// Horizontal Navigation Bar
function NavBar(props) {
    // Dropdown manu state
    const [dropdown, setDropdown] = useState(false);

    // Functions to take care of the dropdown occurrence
    const onMouseEnter = () => setDropdown(true);
    const onMouseLeave = () => setDropdown(false);

    return (
    <nav className="navbar">
        <h3 className="navbar-logo">AlgoVis <i className="fas fa-graduation-cap"></i></h3>
        <ul className="navbar-menu">
            <li key="0" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <a className="navbar-el" href="">Algorithms <i className="fas fa-caret-down"></i></a>
                {dropdown && <Dropdown setAlgorithmInUse={props.setAlgorithmInUse}/>}
            </li>
            <li key="1">
                <a className="navbar-el" href="https://github.com/tiagopmartins/algorithm-visualizer">GitHub</a>
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;