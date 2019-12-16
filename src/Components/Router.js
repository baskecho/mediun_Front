import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import './Router.css';

//Componentes 
import Login from './Login/Login';
import Header from './Header/Heaer';
import Profile from './Profile/Profile';
import ScheduleAppointment from './ScheduleAppointment/ScheduleAppointment';
import MedicalAppointments from './MedicalAppointments/MedicalAppointments';


class Router extends Component 
{
    state = { 
        titlePanel: [],
        render : '/',
        selectedValue : '',
        apiLogin : {},
        schedulePatient : []
    };

    componentDidMount() 
    {
        this.setState({
            titlePanel : ["Agendar una cita", "Mis citas medicas", "Mi perfil", "Mi historial", "Editar cita"]
        });
        const renderLS = localStorage.getItem('render');
        //------------------------------------------------------------------------------

        const apiLoginLS = localStorage.getItem('apiLogin');

        //------------------------------------------------------------------------------
        if(apiLoginLS)
        {
            this.setState({
                render : JSON.parse(renderLS),

            //-------------------------------------------------------------
                apiLogin : JSON.parse(apiLoginLS)
            });
        }
    };

    componentDidUpdate()
    {

        localStorage.setItem(
            'render', JSON.stringify(this.state.render)
        );
        //-----------------------------------------------------------------

        localStorage.setItem(
            'apiLogin', JSON.stringify(this.state.apiLogin)
        );
        
    };



    establishLogiN = (apiLogin) =>
    {
        this.setState({
            apiLogin : apiLogin.createSession,
            render : '/profile'
        });
    };

    closeSesion = () => {
        this.setState({
                apiLogin: {},
                render : '/'
            });
    };

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
                                apiLogin = {this.state.apiLogin}
                            />
                        )}/>
                        <Route exact path="/medical_appointments" render={()=>(
                            <MedicalAppointments
                                titlePanel = {this.state.titlePanel[1]}
                                closeSesion = {this.closeSesion}
                                apiLogin = {this.state.apiLogin}
                            />
                        )}/>
                        <Route exact path="/profile" render={()=>(
                            <Profile
                                titlePanel = {this.state.titlePanel[2]}
                                closeSesion = {this.closeSesion}
                                apiLogin = {this.state.apiLogin}
                            />
                        )}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};export default Router;