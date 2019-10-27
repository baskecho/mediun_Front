import React, { Component } from 'react';

import './Panel.css';
import Appointment from '../Appointment/Appointment';

class Panel extends Component 
{
    render() 
    { 
        return (  
            <div className="mx-auto">
                    <div className="panel-externo">
                        <div className="panel_interno">
                            <div className="colum-blue">
                                <div className="part-colum">
                                    <div className="point-panel"></div>
                                </div>
                                <div className="tittle-panel">
                                    <strong>
                                        {this.props.titlePanel}
                                    </strong>
                                </div>
                            </div>
                            <div className="colum-white">
                                <div className="white-small"></div>
                                <div className="contenido_panel">
                                    <Appointment/>
                                    <Appointment/>
                                    <Appointment/>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
        );
    }
};export default Panel;