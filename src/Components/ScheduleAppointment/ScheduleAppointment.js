import React, { Component } from 'react';

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './ScheduleAppointment.css'

class ScheduleAppointment extends Component 
{
    render() 
    { 
        return ( 
            <div className="mx-auto">
                <SideBar2/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <form>
                                <Panel
                                    titlePanel=  {this.props.titlePanel}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};export default ScheduleAppointment;