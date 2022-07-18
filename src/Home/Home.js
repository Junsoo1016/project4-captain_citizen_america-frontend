import React, { useState } from "react";
import './home.css'
import Map from '../Map/Map'

const Home = ({userData}) => {
    const[isActive, setActive] = useState(false)
    const[clicked, setClicked] = useState(false)
    console.log(clicked);
    return(
        <div className="home">
            <div className="alertBox">
                { clicked ?
                    <h1 id="alert">
                        You have <span id="amount">4</span> Captain Citizens Within 1 Mile
                    </h1>
                    : <h1 id="emergency"> Help requested, be safe! </h1>
                    }
            </div>
             <div className="map">
                <Map userData={userData}/>
            </div>
            <div className="btnBox">
                <button class="depth" type="button" onClick={() => setClicked(!clicked)}><p className="gradientText">Emergency</p></button>
            </div>
        </div>
    )
}

export default Home;