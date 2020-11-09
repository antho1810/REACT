# CREACION DE TU REACT APP
 Abres administrador de tu consola y pones:
 1. create-react-app listareact
 2. cd listareact
 3. npm install react-router-dom
 4. npm install --save axios 
 5. No cierren la consola, la utilizaremos en al final


## Creaciones

Abres el proyecto en tu editor de texto favorito. Sigue el siguiente orden:
1. Dentro de la carpeta src, crearas una carpeta llamada 'pages'
2. Dentro de la carpeta pages, crearas dos hojas .js llamadas Poke.js y Stars.js
3. Regresas a la carpeta src y crearas una carpeta llamada 'components'
4. Dentro de la carpeta components, crearas 3 hojas .js llamadas Navbar.js, Pokemon.js y Startswars.js

### Modificaciones
Index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>React App</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>
```

App.js
```
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Poke from './pages/Poke';
import Stars from './pages/Stars';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/Poke" component={Poke} />
      <Route exact path="/Stars" component={Stars} />

    </Router>
  );
}

export default App;

```

Poke.js
```
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
            <h1>Componente Pokemon:</h1>
            {arrPokemones.map(personaje => <Pokemon name={personaje.name}/>)}
        </div>
    );
}

export default Poke;


```

Stars.js
```
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
            <h1>Componente Starswars:</h1>
            {arrStars.map(personaje => <Starswars name={personaje.name} height={personaje.height} />)}
        </div>
    );
}

export default Stars;
```

Pokemon.js
```
import React from 'react';

// const Pokemon = (props) => {const {name} = props;}
const Pokemon = ({ name }) => {
    return <div><h3>Pokemón: </h3><p>{name}</p> </div>
}

export default Pokemon;
```

Startswars.js
```
import React from 'react';

// const Pokemon = (props) => {const {name} = props;}
const Starswars = ({ name, height }) => {
    return <div><h3>Star Wars: </h3><p>{name}</p> <p>{height}</p></div>
}

export default Starswars;
```

Navbar.js
```
import React from 'react'
import {Link} from 'react-router-dom'

 function Navbar() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/Poke">Lista React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Poke">Poke</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Stars">Stars</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
    export default Navbar;
```


## Inicializar
Ahora de ultimo ponemos la app a iniciar, para hacerlo nos vamos al administrador de la consola y ponemos `npm start` para iniciar la aplicación.


