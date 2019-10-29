import React, { Component } from 'react';

import './MyProfile.css';

class MyProfile extends Component 
{
    render() 
    {
        const {name , date, email, years, identification} = this.props.AppointmentsDates;

        return ( 
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 title-my-profile">
                        <strong>{name}</strong>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <ul>
                            <li><strong>NUMERO DE IDENTIFICACION</strong></li>
                            <label>{identification}</label>
                            <li><strong>EDAD</strong></li>
                            <label>{years} años</label>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><strong>FECHA DE NACIMIENTO</strong></li>
                            <label>{date}</label>
                            <li><strong>CORREO</strong></li>
                            <label>{email}</label>
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