import React, { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
const axios1 = require('axios');


const Poke = () => {
    
    const [arrPokemones,setArrPokemones] = useState([]);
    
    console.log('[Renderización]');
    useEffect(() => {
        axios1.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
            setArrPokemones(res.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <p>Componente POKE</p>
            {arrPokemones.map(personaje => <Pokemon name={personaje.name}/>)}
        </div>
    );
}

export default Poke;
