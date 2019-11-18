import React, { Component } from 'react';

import './Panel.css';
import Appointment from '../Appointment/Appointment';
import MyProfile from '../MyProfile/MyProfile';
import CreateAppointments from '../CreateAppointments/CreateAppointments';
import EditApp from '../EditApp/EditApp';

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
            const AppointmentsDates = this.props.AppointmentsDates.medicalappointments;
            const {identification,  years } = this.props.AppointmentsDates;

            const moreDate = {
                identification, 
                years
            }

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
                        moreDates = {moreDate}
                        moreDateTwo = {moreDateTwo}
                        getSelectedValue = {this.props.getSelectedValue}
                    />
                ))}
            </React.Fragment>;
        }
        else if(this.props.titlePanel === "Agendar una cita")
        {
            renderContainer = <CreateAppointments
                                updateAppointment = {this.props.updateAppointment}
                                specialtyRef = {this.props.specialtyRef}
                                dateRef = {this.props.dateRef}
                                doctorRef = {this.props.doctorRef}
                                titlePanel = {this.props.titlePanel}
                                scheduleByPatient = {this.props.scheduleByPatient}
                            />
        }
        else if (this.props.titlePanel === "Editar cita")
        {
            renderContainer = <EditApp
                                updateAppointment = {this.props.updateAppointment}
                                medicalappointments = {this.props.AppointmentsDates.medicalappointments}
                                specialtyRef = {this.props.specialtyRef}
                                dateRef = {this.props.dateRef}
                                doctorRef = {this.props.doctorRef}
                                titlePanel = {this.props.titlePanel}
                                selectedValue = {this.props.selectedValue}
                                scheduleByPatient = {this.props.scheduleByPatient}
                            />
        }


        return (  
            <div className="mx-auto">
                    <div className="panel-externo">
                        <div className="panel_interno">
                            <div className="colum-blue">
                                {/*
                                    <div className="part-colum">
                                        <div className="point-panel"></div>
                                    </div>
                                 */}
                                

                                <div className="tittle-panel">
                                    <strong>
                                        {this.props.titlePanel}
                                    </strong>
                                </div>
                            </div>
                            <div className="colum-white">
                            {/*
                                <div className="white-small"></div>
                            */}
                                
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