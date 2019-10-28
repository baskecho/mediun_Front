import React, { Component } from 'react';

import './Appointment.css';

class Appointment extends Component 
{
    render() 
    { 
        return ( 
                <div className="container container-appointment">
                    <div className="row ">
                        <div className="col-md-12 code-appointment">                 
                            <label><strong>Codigo Cita: </strong>2333453453455</label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-1 mx-auto my-auto">                 
                            <input type="radio" name="appointment" className="input-radio" value="1" />
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Fecha:</strong> 23-12-2019</li>
                                <li><strong>Hora:</strong> 3:00 PM</li>
                                <li><strong>Centro medigo:</strong> unal Hospital</li>
                                <li><strong>Consultorio:</strong> 35</li>
                                <li><strong>Direccion:</strong> cr 45 # 23-54</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Nombre paciente:</strong>Juanito Pepito Perez</li>
                                <li><strong>Identificacion:</strong> 1045345456</li>
                                <li><strong>e-mail:</strong> jpperezs@unal.edu.co</li>
                                <li><strong>Edad:</strong> 45 años</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Doctor:</strong> Pepito Juanito Perez</li>
                                <li><strong>Especialidad:</strong> internista</li>
                            </ul>
                        </div>
                    </div>
                </div>        
        );
    }
};export default Appointment;