import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './MyProfile.css';


class MyProfile extends Component 
{
    render() 
    {
        const {date,  years, identification} = this.props.AppointmentsDates;
        const {name ,id, email, nickname} = this.props.apiLogin;



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
                                    <li><strong>ID</strong></li>
                                    <label>{id}</label>
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
                                <Link to={'/medical_appointments'}>
                                    <button type="submit" className="profile-button">Mis citas medicas</button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to={'/schedule_appointments'}>
                                    <button type="submit" className="profile-button">Agendar Cita</button>
                                </Link>
                            </div>
                        </div>
                    </div>
        );
    }
};export default MyProfile;