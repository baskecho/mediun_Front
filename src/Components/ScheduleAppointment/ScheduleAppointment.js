import React, { Component } from 'react';

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './ScheduleAppointment.css'

class ScheduleAppointment extends Component 
{

    specialtyRef = React.createRef();
    dateRef = React.createRef();
    doctorRef = React.createRef();

    updateAppointment = (e) =>
    {
        e.preventDefault();
    

        const specialty = this.specialtyRef.current.value,
                date = this.dateRef.current.value,
                doctor = this.doctorRef.current.value;

        const uploadData = {
            specialty,
            date,
            doctor
        };

        this.props.updateAppointment(uploadData);
    }


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
                            <form onSubmit={this.updateAppointment}>
                                <Panel
                                    titlePanel=  {this.props.titlePanel}
                                    specialtyRef = {this.specialtyRef}
                                    dateRef = {this.dateRef}
                                    doctorRef = {this.doctorRef}
                                />
                                <div className="medical_button_collection">
                                    <button type="submit" className="schedule_button">Agendar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};export default ScheduleAppointment;