import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './MyProfile.css';
import jsPDF from 'jspdf';


class MyProfile extends Component 
{

    createPdf = (valores) =>{

            
            const myId = this.props.apiLogin.id.toString(10);
            

            const listPdf = valores.filter((excuse)=>(
                excuse.id_usuario === myId
            ));

            console.log(listPdf);

            var doc = new jsPDF('p', 'pt', [320, 320])

            listPdf.map((excuse)=>{
                doc.text(20,40,  'Codigo: '.concat(excuse.codigo))
                doc.text(20,100, 'Paciente: '.concat(excuse.nombre_paciente));
                doc.text(20, 130, 'Medico: '.concat(excuse.nombre_medico));
                doc.text(20, 160, 'Fecha: '.concat(excuse.fecha));
                doc.text(20, 190, 'Hora: '.concat(excuse.hora));
                doc.text(20, 220, 'Razon: '.concat(excuse.razon));
                doc.text(20, 250, 'Dias de incapacidad: '.concat(excuse.dias_incapacidad));
                doc.addPage();
            });

     
            doc.save('Medical Excuses.pdf')

        }


    render() 
    {
        //const {date,  years, identification} = this.props.AppointmentsDates;
        const {name ,id, email} = this.props.apiLogin;

        
    

        return ( 


            <div className="container">
                        <div className="row ">
                            <div className="col-md-12 title-my-profile">
                                <strong>{name}</strong>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <ul>
                                    <li><strong>ID</strong></li>
                                    <label>{id}</label>
                                    <li><strong>EDAD</strong></li>
                                    <label>25 años</label>
                                    <li><strong>Excusas Medicas</strong></li>
                                    <a href="/#" onClick={(e)=>{
                                        e.preventDefault();
                                        

                                        axios.get('http://34.83.81.244:5006/medical_excuses')
                                        .then((response)=>{
                                            console.log(response.data[0].nombre_paciente);
                                            this.createPdf(response.data);

                                        })
                                        
                                    }}>Descargar</a>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><strong>FECHA DE NACIMIENTO</strong></li>
                                    <label>23-10-2000</label>
                                    <li><strong>CORREO</strong></li>
                                    <label>{email}</label>
                                </ul>
                            </div>
                        </div>
                        <div className="row botones">
                            <div className="col-md-6">
                                <Link to={'/medical_appointments'}>
                                    <button type="submit" className="profile-button">Mis citas medicas</button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to={'/schedule_appointments'}>
                                    <button type="submit" className="profile-button">Agendar Cita</button>
                                </Link>
                            </div>
                        </div>
                    </div>
        );
    }
};export default MyProfile;