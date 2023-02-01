import React, {useEffect, useState} from "react";
import Home from "../home/Home"
import Apod from "../apod/Apod";
import { Routes, Route, Link } from "react-router-dom";


    const APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key='


function Main() {
  

    const [apod, setApod] = useState({})
    const [isApod, setIsApod] = useState(false)

    const loadApod = (APOD_URL) => {
        fetch(APOD_URL)
            .then((response) => response.json())
            .then((data) => {
                setApod(data)
            })
    }

    useEffect(() => {
        if (isApod) {
            loadApod(APOD_URL)
        }

    }, [isApod])


    return (
        <div>
            <nav className="black">
                <div className="nav-wrapper">
                    <Link class="brand-logo" to="/">STELLAR SPACE</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/apod" onClick={() => setIsApod(true)}>APOD</Link></li>
                        <li><Link to="/">NEO</Link></li>
                        <li><Link to="/">MARS_ROVER_PHOTOS</Link></li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/apod" element={<Apod apodData={apod}/>}></Route>
            </Routes>

        </div>
    )
    
}

export default Main;