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

    updateAppointment = () =>
    {
        const str = this.specialtyRef.current.value;

        const selectSelect = str.split(" / ");

        const prueba = datosQuery.filter((datoQuery)=>(
            selectSelect[0] === datoQuery.date &&
            selectSelect[1] === datoQuery.doctor && 
            selectSelect[2] === datoQuery.specialism
        ));

            
        idUpdate = prueba[0].id;
        dateUpdate = prueba[0].date;
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
                    apiLogin = {this.props.apiLogin}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <form onSubmit={this.updateAppointment}>
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
                                            })}
                                            
                                            return(
                                                <div className="medical_button_collection">
                                                    <button onClick={(e)=>{

                                                        e.preventDefault();
                                                        this.updateAppointment() //funcion que me trae lo que necesito

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


