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
                                <label className="title-form-create">Cita Medica</label>
                            </div>
                            <div className="form-group">
                                <input ref={this.props.specialtyRef} list="especialidad" className="style-input-create" placeholder={"Fecha / Doctor / Especialidad"}/>
                                <datalist id="especialidad">
                                    {/* 
                                        Crea la lista con las opciones segun el calendario que se tienen para que
                                        el usuario pueda escoger el que mas necesita.
                                    */}
                                    {Object.keys(this.props.scheduleByPatient).map((date)=>(
                                        <option key={date} value={this.props.scheduleByPatient[date].date.concat(" / ").concat(this.props.scheduleByPatient[date].doctor).concat(" / ").concat(this.props.scheduleByPatient[date].specialism)}/> 
                                    ))}
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};export default CreateAppointments;
