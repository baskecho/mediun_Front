import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';

import './Router.css';

//Componentes 
import Login from './Login/Login';
import Error from './Error/Error';
import Header from './Header/Heaer';
import Profile from './Profile/Profile';
import ScheduleAppointment from './ScheduleAppointment/ScheduleAppointment';
import MedicalAppointments from './MedicalAppointments/MedicalAppointments';
import EditAppointments from './EditAppointments/EditAppointments'
import History from './History/History';


//Pruebas JSON

import loginTest from '../Simulación/login.json';
import userDatestest from '../Simulación/userDates.json';

class Router extends Component 
{
    state = { 
        titlePanel: [],
        AppointmentsDates : {},
        render : '/',
        selectedValue : ''
    };

    componentDidMount() 
    {
        this.setState({
            titlePanel : ["Agendar una cita", "Mis citas medicas", "Mi perfil", "Mi historial", "Editar cita"]
        });
        const AppointmentsDatesLS = localStorage.getItem('AppointmentsDates');
        const renderLS = localStorage.getItem('render')

        if(AppointmentsDatesLS)
        {
            this.setState({
                AppointmentsDates  : JSON.parse(AppointmentsDatesLS),
                render : JSON.parse(renderLS)
            });
        }
    };

    componentDidUpdate()
    {
        localStorage.setItem(
            'AppointmentsDates', JSON.stringify(this.state.AppointmentsDates)
        );
        localStorage.setItem(
            'render', JSON.stringify(this.state.render)
        );
    };



    establishLogiN = (infLogin) =>
    {
        const loginValues = loginTest;

        const getLoginValues = loginValues.filter((loginValue)=>(
            loginValue.userName === infLogin.user && 
            loginValue.password === infLogin.password
        ));

        if(getLoginValues.length === 0)
        {
            Swal.fire({
                type: 'error',
                title: 'Ocurrio un problema',
                text: 'El usuario o la contraseña no es correcta'
            })
        }
        else
        {
            const datesValues = userDatestest;

            const userDate = datesValues.filter((dateValue)=>(
                getLoginValues[0].id === dateValue.idUser
            ));

            this.setState({
                AppointmentsDates : userDate[0],
                render : '/profile'
            });
        }
    };

    closeSesion = () => {
        this.setState({
                AppointmentsDates : {},
                render : '/',
                selectedValue: ''
            });
    };



    getSelectedValue = (selectedValue) =>{

        this.setState({
            selectedValue 
        });
        
    };



    deleteAppointment = () =>{

        if(this.state.selectedValue  === '')
        {
            Swal.fire({
                type: 'error',
                title: 'Ocurrio un problema',
                text: 'Debe seleccionar un cita o puede que no tenca citas'
            })
        }
        else
        {
            Swal.fire({
            title: '¿Esta segur@?',
            text: "¡Esta accion no se puede revertir!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
            if (result.value) {

                const code = this.state.selectedValue;
                let copyAppointmentsDates = this.state.AppointmentsDates;
                const copyMedicalAppointments = [...this.state.AppointmentsDates.medicalappointments]


                const newMedicalAppointments = copyMedicalAppointments.filter((MedicalAppointment)=>(
                    MedicalAppointment.code !== code 
                ));

                copyAppointmentsDates.medicalappointments = newMedicalAppointments;
                this.setState({
                    AppointmentsDates : copyAppointmentsDates,
                    selectedValue : ''
                });

                Swal.fire(
                '¡Eliminado!',
                'Su cita fue eliminada.',
                'éxito'
                )}
            })
        }
        
    };


    updateAppointment = (uploadData) =>
    {
        const {specialty, date, doctor} = uploadData;

        
        let copyAppointmentsDates = this.state.AppointmentsDates;

        let count = Number(this.state.AppointmentsDates.medicalappointments[0].code);
        count  = count + 3;
        

        const createMedicalAppointments = {
            "date" : date,
            "hour" : "12:15 PM",
            "hospital": "Unal Hospital",
            "consultorio": "25",
            "address" : "Cra 45 # 23-54",
            "doctor" : doctor,
            "Especialidad" : specialty,
            "code" : (count).toString()
        }

        const newMedicalAppointments = [createMedicalAppointments , ...this.state.AppointmentsDates.medicalappointments]

        copyAppointmentsDates.medicalappointments = newMedicalAppointments;
        
        this.setState({
            AppointmentsDates : copyAppointmentsDates,
            selectedValue : ''
        });


        Swal.fire(
        '¡Correcto!',
        'Cita medica creada',
        'satisfactoriamente'
        )

        this.setState({
                    render : '/medical_appointments'
                });
        
        Swal.fire({
                position: 'top-center',
                type: 'success',
                title: 'La cita fue agregada',
                showConfirmButton: false,
                timer: 2500
            })
        setTimeout(this.reload, 1000);
        
    };

    editAppointment =(editData)=>{

        Swal.fire({
        title: '¿Esta segur@?',
        text: "¡Esta accion no se puede revertir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Editar!',
        cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.value) {

            const {specialty, date, doctor} = editData;

            let copyAppointmentsDates = this.state.AppointmentsDates;
            const copyMedicalappointments = copyAppointmentsDates.medicalappointments;

            let appointments = copyMedicalappointments.filter((copyMedicalappointment)=>(
                copyMedicalappointment.code !== this.state.selectedValue
            ));
            
            let appointment = copyMedicalappointments.filter((copyMedicalappointment)=>(
                copyMedicalappointment.code === this.state.selectedValue
            ));

            appointment[0].Especialidad = specialty;
            appointment[0].date = date;
            appointment[0].doctor = doctor;

            appointments = [appointment[0],...appointments]

            copyAppointmentsDates.medicalappointments = appointments;

            this.setState({
                    AppointmentsDates : copyAppointmentsDates,
                    selectedValue : '',
                    render : '/medical_appointments'
                });
            }

            Swal.fire({
                position: 'top-center',
                type: 'success',
                title: 'La cita fue editada',
                showConfirmButton: false,
                timer: 2500
            })
            setTimeout(this.reload, 1000);
            
        })
    }

    reload = () => {
        window.location.reload();
    }

    render()
    {   
        return ( 
            <div>
                <BrowserRouter>
                        <Redirect from="/" to= {this.state.render}/>
                        <Redirect from="/edit_appointments" to= {this.state.render}/>
                        <Redirect from="/schedule_appointments" to= {this.state.render}/>
                    <Switch>
                        <Route exact path="/" render={()=>(
                            <div>
                                <Header/>
                                <Login
                                    establishLogiN  = {this.establishLogiN}
                                />
                            </div>
                        )}/>
                        <Route exact path="/schedule_appointments" render={()=>(
                            <ScheduleAppointment
                                titlePanel = {this.state.titlePanel[0]}
                                closeSesion = {this.closeSesion}
                                AppointmentsDates = {this.state.AppointmentsDates}
                                updateAppointment = {this.updateAppointment}
                            />
                        )}/>
                        <Route exact path="/edit_appointments" render={()=>(
                            <EditAppointments
                                titlePanel = {this.state.titlePanel[4]}
                                closeSesion = {this.closeSesion}
                                AppointmentsDates = {this.state.AppointmentsDates}
                                selectedValue = {this.state.selectedValue}
                                editAppointment = {this.editAppointment}
                            />
                        )}/>
                        <Route exact path="/medical_appointments" render={()=>(
                            <MedicalAppointments
                                titlePanel = {this.state.titlePanel[1]}
                                closeSesion = {this.closeSesion}
                                AppointmentsDates = {this.state.AppointmentsDates}
                                getSelectedValue = {this.getSelectedValue}
                                deleteAppointment = {this.deleteAppointment}
                                selectedValue = {this.state.selectedValue}
                            />
                        )}/>
                        <Route exact path="/profile" render={()=>(
                            <Profile
                                titlePanel = {this.state.titlePanel[2]}
                                AppointmentsDates = {this.state.AppointmentsDates}
                                closeSesion = {this.closeSesion}
                            />
                        )}/>
                        <Route exact path="/my_history" render={()=>(
                            <History
                                titlePanel = {this.state.titlePanel[3]}
                                closeSesion = {this.closeSesion}
                                AppointmentsDates = {this.state.AppointmentsDates}
                            />
                        )}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};export default Router;