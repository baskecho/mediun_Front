import React, { Component } from 'react'

import './SideBar.css';
import {Link} from 'react-router-dom'



class SideB extends Component 
{
    render()
    { 
        return ( 
            <div className="border-bar">
                <nav className="side-bar">
                    <div>
                        <Link to={'/'} className = "a-title" id="lsb-title">medi<span>UN</span></Link>
                    </div>
                    <div className="div-image-profile">
                        <img className="im-side-bar" src="https://i.ibb.co/s2Zgzyx/imagen-profile.png" width="85" height="85"/>
                        <label className="la-side-bar">nombreUsuario</label>
                    </div>
                    <Link to={"#"} className="l-side-bar">Mi Perfil</Link>
                    <Link to={"#"} className="l-side-bar">Mis citas medicas</Link>
                    <Link to={"#"} className="l-side-bar">Agendar una cita</Link>
                    <Link to={"#"} className="l-side-bar">Mi historial</Link>
                    <Link to={"#"} className="l-side-bar l-sc-bar">Cerrar sesion</Link>
                </nav>
            </div>
        );
    }

};export default SideB;