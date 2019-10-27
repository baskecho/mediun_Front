import React, { Component } from 'react';

import './Panel.css'

class Panel extends Component 
{
    render() 
    { 
        return (  
                <div className="mx-auto">
                {/*<SideBar2/>
                    <div className="container">
                        <div className="row panel-externo">
                            <div className="col-md-11 mx-auto">
                            
                                <div className="panel_interno">
                                    <div className="colum-blue">
                                        <div className="part-colum">
                                            <div className="point-panel">

                                            </div>
                                        </div>
                                        <div className="tittle-panel">
                                            {this.props.nombre}
                                        </div>
                                    </div>
                                    <div className="colum-white">
                                        <div className="white-small"></div>
                                        <div className="contenido_panel">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                */}
                <div className="panel-externo">
                    <div className="panel_interno">
                        <div className="colum-blue">
                            <div className="part-colum">
                                <div className="point-panel">

                                </div>
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
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
        );
    }
};export default Panel;