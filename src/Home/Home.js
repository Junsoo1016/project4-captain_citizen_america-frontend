import React, { useState } from "react";
import './home.css'

const Home = () => {
    const[isActive, setActive] = useState(false)

    return(
        <div className="home">
        <h1 className="alert">You have <span id="amount">12</span> Captain Citizens Within 1 Mile</h1>
        <button class="depth" type="button"><p className="gradientText">Emergency</p></button>
        </div>
    )
}

export default Home;