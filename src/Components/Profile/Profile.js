import React, { Component } from 'react';

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

class Profile extends Component 
{
    render() { 
        return (  
            <div className="mx-auto">
                <SideBar2
                    closeSesion = {this.props.closeSesion}
                    AppointmentsDates = {this.props.AppointmentsDates}
                    apiLogin = {this.props.apiLogin}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <form>
                                <Panel
                                    titlePanel=  {this.props.titlePanel}
                                    AppointmentsDates = {this.props.AppointmentsDates}
                                    apiLogin = {this.props.apiLogin}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};export default Profile ;