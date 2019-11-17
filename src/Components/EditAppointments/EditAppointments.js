import React, { Component } from 'react';

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

class EditAppointments  extends Component 
{

    specialtyRef = React.createRef();
    dateRef = React.createRef();
    doctorRef = React.createRef();

    editAppointment = (e) =>
    {
        e.preventDefault();

        const specialty = this.specialtyRef.current.value,
                date = this.dateRef.current.value,
                doctor = this.doctorRef.current.value;

        const editData = {
            specialty,
            date,
            doctor
        };

        this.props.editAppointment(editData);
    };




    render() { 
        return (  
            <div className="mx-auto">
                <SideBar2
                    closeSesion = {this.props.closeSesion}
                    AppointmentsDates = {this.props.editAppointment}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <form onSubmit={this.editAppointment}>
                                <Panel
                                    titlePanel =  {this.props.titlePanel}
                                    selectedValue = {this.props.selectedValue}
                                    AppointmentsDates = {this.props.AppointmentsDates}
                                    specialtyRef = {this.specialtyRef}
                                    dateRef = {this.dateRef}
                                    doctorRef = {this.doctorRef}
                                />
                                <div className="medical_button_collection">
                                    <button type="submit" className="schedule_button">Editar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};export default EditAppointments;