import React, { Component } from 'react';

import './Panel.css';
import Appointment from '../Appointment/Appointment';
import MyProfile from '../MyProfile/MyProfile';
import CreateAppointments from '../CreateAppointments/CreateAppointments';

class Panel extends Component 
{
    render() 
    {
        let renderContainer = "";

        if(this.props.titlePanel === "Mi perfil")
        {
            renderContainer = <MyProfile
                                AppointmentsDates = {this.props.AppointmentsDates}
                            />;
        }
        else if(this.props.titlePanel === "Mis citas medicas")
        {
            const AppointmentsDates = this.props.AppointmentsDates.medicalappointments;
            const {name, identification, email, years } = this.props.AppointmentsDates;

            const moreDate = {
                name, 
                identification, 
                email, 
                years
            }

            renderContainer = <React.Fragment>
                {Object.keys(AppointmentsDates).map((date)=>(
                    <Appointment
                        key  = {date}
                        infoAppointments = {AppointmentsDates[date]}
                        moreDates = {moreDate}
                    />
                ))}
            </React.Fragment>;
        }
        else if(this.props.titlePanel === "Agendar una cita" || this.props.titlePanel === "Editar cita")
        {
            renderContainer = <CreateAppointments/>
        }


        return (  
            <div className="mx-auto">
                    <div className="panel-externo">
                        <div className="panel_interno">
                            <div className="colum-blue">
                                <div className="part-colum">
                                    <div className="point-panel"></div>
                                </div>
                                <div className="tittle-panel">
                                    <strong>
                                        {this.props.titlePanel}
                                    </strong>
                                </div>
                            </div>
                            <div className="colum-white">
                                <div className="white-small"></div>
                                <div className="contenido_panel">
                                    {renderContainer}
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
        );
    }
};export default Panel;