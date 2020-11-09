import React, { useEffect, useState } from "react";
import Starswars from "../components/Startswars";
const axios1 = require('axios');


const Stars = () => {
    
    const [arrStars,setArrStars] = useState([]);
    
    console.log('[Renderización]');
    useEffect(() => {
        axios1.get('https://swapi.dev/api/people/').then(res => {
            setArrStars(res.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <p>Componente Starswars</p>
            {arrStars.map(personaje => <Starswars name={personaje.name} height={personaje.height} />)}
        </div>
    );
}

export default Stars;