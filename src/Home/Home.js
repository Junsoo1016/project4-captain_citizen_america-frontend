import React, { useState } from "react";
import './home.css'
import Map from '../Map/Map'

const Home = ({userData}) => {
    const[isActive, setActive] = useState(false)

    return(
        <div className="home">
            <div className="alertBox">
                <h1 id="alert">You have <span id="amount">12</span> Captain Citizens Within 1 Mile</h1>
            </div>
             <div className="map">
                <Map userData={userData}/>
            </div>
            <div className="btnBox">
                <button class="depth" type="button"><p className="gradientText">Emergency</p></button>
            </div>
        </div>
    )
}

export default Home;