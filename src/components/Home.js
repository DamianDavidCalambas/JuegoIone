import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Inicio</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>IONE</h1>
                
                <h2>Mariana Martínez 
                    Ana Sofia Marin
                    Colegio:Santa Isabel De Hungría
                    Grado:10-2 
                </h2>  
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Jugar</Link></li>
                    </ul>
                </div>
                {/* <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                </div> */}
            </section>
        </div>
    </Fragment>
);

export default Home;