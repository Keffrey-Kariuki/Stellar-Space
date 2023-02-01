import Main from "../main/Main";
import Apod from "../apod/Apod";
import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom'

const APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key='

function App() {

    const [apod, setApod] = useState({})
    const [isApod, setIsApod] = useState(true)

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
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );

}

export default App;