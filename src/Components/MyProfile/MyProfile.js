import React, { Component } from 'react';

import './MyProfile.css';

class MyProfile extends Component 
{
    render() 
    { 
        return ( 
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 title-my-profile">
                        <strong>LUIS PEPITO PEREZ SALGADO</strong>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <ul>
                            <li><strong>NUMERO DE IDENTIFICACION</strong></li>
                            <label>1234567890</label>
                            <li><strong>EDAD</strong></li>
                            <label>45 años</label>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><strong>FECHA DE NACIMIENTO</strong></li>
                            <label>29-03-2000</label>
                            <li><strong>CORREO</strong></li>
                            <label>lpperezs@unal.edu.co</label>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button type="submit" className="profile-button">Mis citas medicas</button>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="profile-button">Agendar Cita</button>
                    </div>
                </div>
            </div>
        );
    }
};export default MyProfile;