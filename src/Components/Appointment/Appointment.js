//Dependencias
import React, { Component } from 'react';

//Estilos
import './Appointment.css';



class Appointment extends Component 
{       
        /*
            Funcion que se encarga de traer mediante propr la funcion 
            getSelectValue que se encargara de recibir como argumento
            la cita mediga seleccionada.
        */
        handleOptionChange = () =>{
            this.props.getSelectedValue(this.props.infoAppointment.code);
        }

        /*
            Funcion que se encarga de identificar si la cita medica en 
            especial fue seleccionada, de ser asi, asigna el estilo para
            la cita medica seleccionada, de no ser asi aplica el estilo
            para una cita medica no seleccionada.
        */
        handleStyle = () =>{

            if(this.props.infoAppointment.id === this.props.selectValue)
            {
                return("container container-appointment-select");
            }
            else
            {
                return("container container-appointment");
            }
        }

    render() 
    { 
        /* 
            En caso de que la informacion obtenida para la cita medica
            sea vacia retorno un null, se realiza esta comprobaicon para
            evitar errores.
        */
        if(Object.keys(this.props.infoAppointment).length === 0)
        {
            return null;
        }

        /*
            Una vez asegurado que existen valores en la inforamcion de la cita 
            mediga, creamos constantes con cada una de la informacion y de esa
            manera poner mostrar la informacion en la cita.
        */
        const {doctor, id, date, specialism, code} = this.props.infoAppointment;
        const {email,name, nickname} = this.props.moreDateTwo;

        return(
            <div className={this.handleStyle()}>
                    <div className="row ">
                        <div className="col-md-12 code-appointment">                 
                            <label><strong>Codigo Cita: </strong>{id}</label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-1 mx-auto my-auto">                 
                            <input onClick={(e)=>{
                                e.preventDefault();

                                /* 
                                    Cuando le damos click en el inputradio se lalma a la 
                                    funcion getSelectedValue para mandar el id de la cita
                                    medica y de esa manera saber cual cita medica fue 
                                    escogida
                                */
                                this.props.getSelectedValue(id);
                            }} type="radio" name="appointment" className="input-radio" value={code} />
                        </div>
                        
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Fecha:</strong> {date}</li>
                                <li><strong>Hora:</strong> 03:15</li>
                                <li><strong>Centro medigo:</strong>"Hospital Un"</li>
                                <li><strong>Consultorio:</strong>425</li>
                                <li><strong>Direccion:</strong>Calle 44 59-75</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Nombre paciente:</strong>{name}</li>
                                <li><strong>Identificacion:</strong> {id}</li>
                                <li><strong>e-mail:</strong> {email}</li>
                                <li><strong>usuario:</strong>{nickname}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <ul>
                                <li><strong>Doctor:</strong> {doctor}</li>
                                <li><strong>Especialidad:</strong> {specialism}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
        
        
    }
};export default Appointment;