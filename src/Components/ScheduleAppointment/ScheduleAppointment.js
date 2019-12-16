import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './ScheduleAppointment.css'


import {Mutation, Query} from 'react-apollo';
import {gql} from 'apollo-boost';


let datosQuery = "";
let idUpdate ="";
let dateUpdate="";



class ScheduleAppointment extends Component 
{

    

    specialtyRef = React.createRef();
    //dateRef = React.createRef();
    //doctorRef = React.createRef();

    updateAppointment = () =>
    {
        

        const str = this.specialtyRef.current.value;

        const selectSelect = str.split(" / ");

        const prueba = datosQuery.filter((datoQuery)=>(
            selectSelect[0] === datoQuery.date &&
            selectSelect[1] === datoQuery.doctor && 
            selectSelect[2] === datoQuery.specialism
        ));

        console.log(prueba[0].id);
            
        idUpdate = prueba[0].id;
        dateUpdate = prueba[0].date;
        

    

        /*const specialty = this.specialtyRef.current.value,
                date = this.dateRef.current.value,
                doctor = this.doctorRef.current.value;
        
        console.log("hola");

        if(specialty === "" || date === "" || doctor === "")
        {
            Swal.fire({
                type: 'error',
                title: 'Ocurrio un problema',
                text: 'Todos los campos son obligatorios'
            })
        
            return(null);
        }

        const uploadData = {
            specialty,
            date,
            doctor
        };


        this.props.updateAppointment(uploadData);
        e.currentTarget.reset();*/
    };


    graphqlAppointments = () =>
    {
        const CharactersQuery = () => {
            if(Object.keys(this.props.apiLogin).length === 0)
            {
                return null;
            }

            const name = "";
            

            return <Query query={gql`query ($name:String!){
                    scheduleByPatient(patient: $name){
                    id
                    doctor
                    date
                    doctor
                    specialism
                    code
                    available
                } 
                }`} variables={{ name }}>
                {
                    ({loading, error, data }) => {
                        if(loading) return <p>Cargando.....</p>
                        if(error) return <p>Error!</p>
                        
                        datosQuery = data.scheduleByPatient;

                        return (
                            <Panel
                                titlePanel=  {this.props.titlePanel}
                                specialtyRef = {this.specialtyRef}
                                //dateRef = {this.dateRef}
                                //doctorRef = {this.doctorRef}
                                scheduleByPatient = {data.scheduleByPatient}
                            />
                        )
                    }
                }
                </Query>
        };

        return (CharactersQuery);
    }

    reload = () => {
        window.location.reload();
    }


    render() 
    { 

        if(Object.keys(this.props.apiLogin).length === 0)
            {
                return null;
            }

            const name = this.props.apiLogin.name;
            const email = this.props.apiLogin.email;


        const CharactersSchedulePanelQuery = this.graphqlAppointments();
        return ( 
            <div className="mx-auto">
                <SideBar2
                    closeSesion = {this.props.closeSesion}
                    //AppointmentsDates = {this.props.AppointmentsDates}
                    apiLogin = {this.props.apiLogin}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <form onSubmit={this.updateAppointment}>

                                {/*
                                    <Panel
                                    titlePanel=  {this.props.titlePanel}
                                    specialtyRef = {this.specialtyRef}
                                    dateRef = {this.dateRef}
                                    doctorRef = {this.doctorRef}
                                    />

                                 */}
                                <CharactersSchedulePanelQuery/>

                                
                                    <Mutation mutation={gql`mutation ($id: String!, $patient: String!){
                                        assignSchedule(
                                            id: $id
                                            patient: $patient
                                        ) {
                                            id
                                            patient
                                            specialism
                                            date
                                            doctor
                                        }
                                    }`}>
                                    {
                                        (addTodo,{data }) => {
                                            if(data == null)
                                            {
                                                
                                            }
                                            else
                                            {
                                                //console.log(this.userRef.current.value)
                                                //console.log(this.passwordRef.current.value);
                                                //this.establishLogiN(data);
                                                console.log(data.assignSchedule);
                                                console.log(name);


                                                axios.post('http://35.245.16.64:5000/graphql', {
                                                    query: gql`mutation ($name: String!, $email: String!, $date: String!){
                                                                        createNotif(user: {
                                                                            name: $name
                                                                            email: $email
                                                                            date: $date
                                                                        }) {
                                                                            email
                                                                        }
                                                                    }`,
                                                    variables: {
                                                        name: name,
                                                        email: "lgavendanoa@unal.edu.co",
                                                        date: dateUpdate,
                                                    },
                                                        })
                                                       /* .then( (response) => {
                                                        
                                                                //console.log(response);
                                                            
                                                                }
                                                            )*/












                                            }
                                            
                                            return(

                                                <div className="medical_button_collection">
                                                    <button onClick={(e)=>{

                                                        e.preventDefault();
                                                        this.updateAppointment() //funcion que me trae lo que necesito

                                                        console.log("Hola amigos, vamos a agregar jaja");
                                                        console.log(idUpdate);
                                                        console.log(name);

                                                        addTodo({
                                                        variables: {
                                                            id: idUpdate,
                                                            patient: name
                                                        }

                                                    });

                                                    

                                                    Swal.fire({
                                                        position: 'top-center',
                                                        type: 'success',
                                                        title: 'La cita fue agregada',
                                                        showConfirmButton: false,
                                                        timer: 2500
                                                    })
                                                    setTimeout(this.reload, 1000);
                                                    }} className="schedule_button">Agendar</button>
                                                    </div>
                                                ) 
                                        }
                                    }
                                    </Mutation>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};export default ScheduleAppointment;


