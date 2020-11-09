
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
