import "./InfoBar.css"
import React from "react"

// Information bar
function InfoBar(props) {
    return (
        <div className="infobar">
            <ul className="infobar-menu">
                <li key="0">
                    <text className="infobar-el-text">{props.algorithmInUse.name}</text>
                </li>
                <li key="1">
                    <a className="infobar-el" href="">Clear</a>
                </li>
                <li key="2">
                    <a className="infobar-el" href="">About</a>
                </li>
                <li key="3">
                    <a className="infobar-el" href="">View Code</a>
                </li>
            </ul>
        </div>
    );
}


export default InfoBar;