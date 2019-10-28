import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


//Componentes 
import Login from './Login/Login';
import Error from './Error/Error';
import Header from './Header/Heaer';
import Profile from './History/History';
import ScheduleAppointment from './ScheduleAppointment/ScheduleAppointment';
import MedicalAppointments from './MedicalAppointments/MedicalAppointments';
import EditAppointments from './EditAppointments/EditAppointments'
import History from './History/History';

class Router extends Component 
{
    state = { 
        titlePanel: []
    };

    componentDidMount() 
    {
        this.setState({
            titlePanel : ["Agendar una cita", "Mis citas medicas", "Mi perfil", "Mi historial", "Editar cita"]
        });
    };

    render()
    { 
        
        return ( 
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={()=>(
                            <div>
                                <Header/>
                                <Login/>
                            </div>
                        )}/>
                        <Route exact path="/schedule_appointments" render={()=>(
                            <ScheduleAppointment
                                titlePanel = {this.state.titlePanel[0]}
                            />
                        )}/>
                        <Route exact path="/edit_appointments" render={()=>(
                            <EditAppointments
                                titlePanel = {this.state.titlePanel[4]}
                            />
                        )}/>
                        <Route exact path="/medical_appointments" render={()=>(
                            <MedicalAppointments
                                titlePanel = {this.state.titlePanel[1]}
                            />
                        )}/>
                        <Route exact path="/profile" render={()=>(
                            <Profile
                                titlePanel = {this.state.titlePanel[2]}
                            />
                        )}/>
                        <Route exact path="/my_history" render={()=>(
                            <History
                                titlePanel = {this.state.titlePanel[3]}
                            />
                        )}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};export default Router;