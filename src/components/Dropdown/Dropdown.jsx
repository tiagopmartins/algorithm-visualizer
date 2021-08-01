import "./Dropdown.css"
import React, { useState } from "react"
import { DropdownItems } from "./DropdownItems"
import { Algorithms } from "../../Algorithms/Algorithms"

function Dropdown(props) {
    const [clicked, setClicked] = useState(false);

    // Function to set the correct click state
    const handleClick = () => setClicked(!clicked);

    return (
        <>
            <ul className={clicked ? "dropdown-menu-clicked" : "dropdown-menu"} onClick={handleClick}>
                {DropdownItems.map((item, index) => {
                    return <li key={index}>
                        <a className={item.className} onClick={() => {
                            setClicked(false);
                            props.setAlgorithmInUse(Algorithms[item.key]);
                        }}>
                            {Algorithms[item.key].name}
                        </a>
                    </li>
                })}
            </ul>
        </>
    );
}

export default Dropdown;