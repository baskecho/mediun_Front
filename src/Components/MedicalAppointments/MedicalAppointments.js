import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './MedicalAppointments.css';

class MedicalAppointments extends Component
{
    

    deleteMedicalAppointment = () =>
    {
        this.props.deleteAppointment();
    };

    updateMedicalAppointment = () =>
    {

    }


    cancelActions = (e) =>
    {
        e.preventDefault();
    };




    render() 
    { 
        return (  
            <div className="mx-auto">
                <SideBar2
                    closeSesion = {this.props.closeSesion}
                    AppointmentsDates = {this.props.AppointmentsDates}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <div>
                                <form onSubmit={this.cancelActions}>
                                    <Panel
                                        titlePanel=  {this.props.titlePanel}
                                        AppointmentsDates = {this.props.AppointmentsDates}
                                        getSelectedValue = {this.props.getSelectedValue}
                                    />
                                    <div className="medical_button_collection">
                                        <button onClick={this.deleteMedicalAppointment} className="medical_button">Eliminar</button>
                                        <button type="submit" className="medical_button medical_button_edit">Editar</button>
                                        <Link to="/schedule_appointments">
                                            <button type="submit" className="medical_button medical_button_add">Agregar cita</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}export default MedicalAppointments;