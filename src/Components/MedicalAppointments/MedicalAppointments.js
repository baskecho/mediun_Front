import React, { Component } from 'react'

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './MedicalAppointments.css';

class MedicalAppointments extends Component
{
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
                                <form>
                                    <Panel
                                        titlePanel=  {this.props.titlePanel}
                                    />
                                    <div className="medical_button_collection">
                                        <button type="submit" className="medical_button">Eliminar</button>
                                        <button type="submit" className="medical_button medical_button_edit">Editar</button>
                                        <button type="submit" className="medical_button medical_button_add">Agregar cita</button>
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