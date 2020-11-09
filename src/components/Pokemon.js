import React from 'react';

// const Pokemon = (props) => {const {name} = props;}
const Pokemon = ({ name }) => {
    return <div><h3>Pokemón: </h3><p>{name}</p> </div>
}

export default Pokemon;