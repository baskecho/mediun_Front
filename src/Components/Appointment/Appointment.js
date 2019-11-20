import React, { Component } from 'react';

import './Appointment.css';

class Appointment extends Component 
{
        handleOptionChange = () =>{
            this.props.getSelectedValue(this.props.infoAppointment.code);
            console.log(this.props.infoAppointment.code);
        }

        handleStyle = () =>{

            if(this.props.infoAppointment.id === this.props.selectValue)
            {
                console.log("Muy bien");
                return("container container-appointment-select");
            }
            else
            {
                console.log("Muy mal");
                return("container container-appointment");
            }
        }

    render() 
    { 

        const estyleSelect = this.handleStyle();

        console.log(estyleSelect);

        if(Object.keys(this.props.infoAppointment).length === 0)
        {
            return null;
        }

        console.log(this.props.infoAppointment);
        console.log(this.props.selectValue);

        const {doctor, id, date, specialism, code} = this.props.infoAppointment;
        //const {date, hour, hospital, consultorio, address, doctor, Especialidad, code} = this.props.infoAppointments;
        //const {identification, years } = this.props.moreDates;
        const {email,name, nickname} = this.props.moreDateTwo;

        return(
            <div className={estyleSelect}>
                    <div className="row ">
                        <div className="col-md-12 code-appointment">                 
                            <label><strong>Codigo Cita: </strong>{id}</label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-1 mx-auto my-auto">                 
                            <input onClick={(e)=>{
                                e.preventDefault();
                                this.props.getSelectedValue(this.props.infoAppointment.id);
                            }} type="radio" name="appointment" className="input-radio" value={code} />
                        </div>
                        
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Fecha:</strong> {date}</li>
                                <li><strong>Hora:</strong> 03:15</li>
                                <li><strong>Centro medigo:</strong>"Hospital Un"</li>
                                <li><strong>Consultorio:</strong>425</li>
                                <li><strong>Direccion:</strong>Calle 44 59-75</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Nombre paciente:</strong>{name}</li>
                                <li><strong>Identificacion:</strong> {id}</li>
                                <li><strong>e-mail:</strong> {email}</li>
                                <li><strong>usuario:</strong>{nickname}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Doctor:</strong> {doctor}</li>
                                <li><strong>Especialidad:</strong> {specialism}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
        
        
    }
};export default Appointment;