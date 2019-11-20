import React, { Component } from 'react'

import './EditApp.css';

class EditApp extends Component 
{
    render() 
    { 

       // let Especialidad = "";
        //let fecha = "";
        //let Medico = "";

        /*
            if(this.props.titlePanel === "Agendar una cita")
        {
            Especialidad = "Especialidad";
            Medico = "Medico"
        }else if(this.props.titlePanel === "Editar cita" && this.props.selectedValue !== '')
        {
            const appointment = this.props.medicalappointments.filter((medicalappointment)=>(
                medicalappointment.code === this.props.selectedValue
            ));

            Especialidad = appointment[0].Especialidad;
            fecha = "Fecha actual de la cita: " + appointment[0].date;
            Medico = appointment[0].doctor;
        }
        
        
        
         */

        console.log(this.props.scheduleByPatient);

        return ( 
            <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            
                                <div className="form-group">
                                    <label className="title-form-create">Cita</label>
                                </div>
                                <div className="form-group">
                                    <input ref={this.props.specialtyRef} list="especialidad" className="style-input-create" placeholder={"Fecha / Doctor / Especialidad"}/>
                                    <datalist id="especialidad">
                                    {/*

                                        {Object.keys(this.props.scheduleByPatient).map((date)=>(
                                            <option key={date} value={this.props.scheduleByPatient[date].date.concat(" / ").concat(this.props.scheduleByPatient[date].doctor).concat(" / ").concat(this.props.scheduleByPatient[date].specialism)}/> 
                                            
                                        ))}

                                     */}
                                    
                                        <option value= "Hola mis amigos"/>
                                        <option value= "Hola mis am"/>
                                        <option value= "Hola mis mos"/>
                                        

                                    </datalist>
                                </div>

                                {/*
                                    <div className="form-group">
                                    <label>
                                        {fecha}
                                    </label>
                                    <br/>
                                    <input ref={this.props.dateRef} type="date" placeholder={fecha} id="start" className="style-input-create"  name="trip-start"  min="2018-01-01" max="2020-12-31"/>
                                </div>
                                <div className="form-group">
                                    <input ref={this.props.doctorRef} list="doctor" className="style-input-create" placeholder={Medico}/>
                                    <datalist id="doctor">
                                        <option value="Pepito Perez"/>
                                        <option value="David Angarita"/>
                                        <option value="Julian Angulo"/>
                                        <option value="Sandra Suarez"/>
                                        <option value="Liliana Romero"/>
                                    </datalist>
                                </div>


                                 */}
                        
                        </div>
                    </div>
                </div>
        );
    }
};export default EditApp;
