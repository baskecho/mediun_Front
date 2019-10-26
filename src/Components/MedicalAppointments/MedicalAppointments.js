import React, { Component } from 'react';
import SideBar2 from '../SideBar/SideBar2'
import Panel from '../Panel/Panel'

class MedicalAppointments extends Component 
{
    render() 
    { 
        return ( 
            <div>
                <SideBar2/>
                <Panel/>
            </div>
        );
    }
}
export default MedicalAppointments;