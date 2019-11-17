import React, { Component } from 'react';

import './Appointment.css';

class Appointment extends Component 
{
    handleOptionChange = () =>{
        this.props.getSelectedValue(this.props.infoAppointments.code);
    }

    render() 
    { 
        
        const {date, hour, hospital, consultorio, address, doctor, Especialidad, code} = this.props.infoAppointments;
        const {name, identification, email, years } = this.props.moreDates;
        
        return ( 
                <div className="container container-appointment">
                    <div className="row ">
                        <div className="col-md-12 code-appointment">                 
                            <label><strong>Codigo Cita: </strong>{code}</label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-1 mx-auto my-auto">                 
                            <input onChange={this.handleOptionChange} type="radio" name="appointment" className="input-radio" value={code} />
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Fecha:</strong> {date}</li>
                                <li><strong>Hora:</strong> {hour}</li>
                                <li><strong>Centro medigo:</strong> {hospital}</li>
                                <li><strong>Consultorio:</strong> {consultorio}</li>
                                <li><strong>Direccion:</strong> {address}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Nombre paciente:</strong>{name}</li>
                                <li><strong>Identificacion:</strong> {identification}</li>
                                <li><strong>e-mail:</strong> {email}</li>
                                <li><strong>Edad:</strong>{years}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Doctor:</strong> {doctor}</li>
                                <li><strong>Especialidad:</strong> {Especialidad}</li>
                            </ul>
                        </div>
                    </div>
                </div>        
        );
    }
};export default Appointment;