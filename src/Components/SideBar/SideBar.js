import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
import './SideBar2.css';


class SideBar2 extends Component {
render() {
    return (
        <div className="border-bar">
            <Menu>
                <div>
                    <Link to={'/'} className = "lsb-title">medi<span>UN</span></Link>
                </div>
                <div className="div-image-profile">
                    <img className="im-side-bar" src="https://i.ibb.co/s2Zgzyx/imagen-profile.png" width="85" height="85"/>
                    <label className="la-side-bar">nombreUsuario</label>
                </div>
                <Link to={"#"} className="l-side-bar">Mi Perfil</Link>
                <Link to={"/medical_appointments"} className="l-side-bar">Mis citas medicas</Link>
                <Link to={"/schedule_appointments"} className="l-side-bar">Agendar una cita</Link>
                <Link to={"#"} className="l-side-bar">Mi historial</Link>
                <Link to={"#"} className="l-side-bar l-sc-bar">Cerrar sesion</Link>
            </Menu> 
        </div>
    );
}
}; export default SideBar2;

