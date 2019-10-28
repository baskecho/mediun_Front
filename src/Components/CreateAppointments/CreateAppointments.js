import React, { Component } from 'react'

import './CreateAppointments.css';

class CreateAppointments extends Component 
{
    render() 
    { 
        return ( 
            <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            
                                <div className="form-group">
                                    <label className="title-form-create">Cita</label>
                                </div>
                                <div className="form-group">
                                    <input list="especialidad" className="style-input-create" placeholder="Especialidad"/>
                                    <datalist id="especialidad">
                                        <option value="General"/>
                                        <option value="Internista"/>
                                        <option value="Psicologia"/>
                                        <option value="Nutricionista"/>
                                        <option value="Otorrinolaringologia"/>
                                    </datalist>
                                </div>
                                <div className="form-group">
                                    <input type="date" id="start" className="style-input-create"  name="trip-start"  min="2018-01-01" max="2020-12-31" placeholder="2018-01-01"/>
                                </div>
                                <div className="form-group">
                                    <input list="doctor" className="style-input-create" placeholder="Medico"/>
                                    <datalist id="doctor">
                                        <option value="Pepito Perez"/>
                                        <option value="David Angarita"/>
                                        <option value="Julian Angulo"/>
                                        <option value="Sandra Suarez"/>
                                        <option value="Liliana Romero"/>
                                    </datalist>
                                </div>
                        
                        </div>
                    </div>
                </div>
        );
    }
};export default CreateAppointments;
