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
                                apiLogin = {this.props.apiLogin}
                            />;
        }
        else if(this.props.titlePanel === "Mis citas medicas")
        {
            const scheduleByPatient = this.props.scheduleByPatient;

            if(Object.keys(this.props.apiLogin).length === 0)
            {
                return null;
            }

            const {email, id, name, nickname} = this.props.apiLogin;

            const moreDateTwo = {
                name,
                id, 
                email, 
                nickname
            }

            console.log(this.props.apiLogin);

            console.log(scheduleByPatient);

            renderContainer = <React.Fragment>
                {Object.keys(scheduleByPatient).map((date)=>(
                    <Appointment
                        key  = {date}
                        infoAppointment = {scheduleByPatient[date]}
                           // moreDates = {moreDate}
                        moreDateTwo = {moreDateTwo}
                        getSelectedValue = {this.props.getSelectedValue}
                        selectValue = {this.props.selectValue}
                    />
                ))}
            </React.Fragment>;
        }
        else if(this.props.titlePanel === "Agendar una cita")
        {
            renderContainer = <CreateAppointments
                                specialtyRef = {this.props.specialtyRef}
                                scheduleByPatient = {this.props.scheduleByPatient}
                            />
        }
        return (  
            <div className="mx-auto">
                    <div className="panel-externo">
                        <div className="panel_interno">
                            <div className="colum-blue">
                                <div className="tittle-panel">
                                    <strong>
                                        {this.props.titlePanel}
                                    </strong>
                                </div>
                            </div>
                            <div className="colum-white">
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