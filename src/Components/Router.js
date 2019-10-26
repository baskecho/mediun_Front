import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


//Componentes 
import Login from './Login/Login';
import Error from './Error/Error';
import Header from './Header/Heaer';
import Panel from './Panel/Panel';

class Router extends Component 
{
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
                        <Route exact path="/schedule_appointment" render={()=>(
                            <Panel/>
                        )}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};export default Router;