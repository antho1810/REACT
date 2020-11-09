import React from 'react';

// const Pokemon = (props) => {const {name} = props;}
const Starswars = ({ name, height }) => {
    return <div><h3>Star Wars: </h3><p>{name}</p> <p>{height}</p></div>
}

export default Starswars;