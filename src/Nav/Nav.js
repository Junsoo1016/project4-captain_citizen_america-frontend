import React, { useState } from "react";
import './nav.css'
import { VscMenu, VscClose } from "react-icons/vsc";

const Nav = () => {
    const[isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
      };

    return(
        <header>
            <div className="navBox">
                <div className="navLogo">
                    <img src="/images/Captain_America's_Shield.png" alt="Captain America's Shield" id="shield"/>
                    <h1 className="gradient-text">Captain Citizen America</h1>
                </div>
                <div className="toggleBtn">
                    <VscMenu />
                </div>
            </div>
        </header>
    )
}

export default Nav;

{/* <div className="navLinks">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div> */}