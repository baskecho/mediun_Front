import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


import SideBar2 from '../SideBar/SideBar2';
import Panel from '../Panel/Panel';

import './MedicalAppointments.css';


import {Mutation, Query} from 'react-apollo';
import {gql} from 'apollo-boost';




let valor="";


class MedicalAppointments extends Component
{
    state = {
        selectValue: ""
    }

    cancelActions = (e) =>
    {
        e.preventDefault();
    
    };

    getSelectedValue = (selectValue) =>
    {
        this.setState({
            selectValue
        });
        valor = selectValue;
    }

    reload = () => {
        window.location.reload();
    }
    
    graphqlAppointments = () =>
    {
        const CharactersQuery = () => {
            if(Object.keys(this.props.apiLogin).length === 0)
            {
                return null;
            }

            const name = this.props.apiLogin.name;

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
                        return (
                            <Panel
                                        titlePanel=  {this.props.titlePanel}
                                        getSelectedValue = {this.getSelectedValue}
                                        scheduleByPatient = {data.scheduleByPatient}
                                        apiLogin = {this.props.apiLogin}
                                        selectValue = {this.state.selectValue}
                                    />
                        )
                    }
                }
                </Query>
        };

        return (CharactersQuery);
    }

    render() 
    { 
        const CharactersPanelQuery = this.graphqlAppointments();

        return (  
            <div className="mx-auto">
                <SideBar2
                    closeSesion = {this.props.closeSesion}
                    apiLogin = {this.props.apiLogin}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto">
                            <div>
                                <form onSubmit={this.cancelActions}>
                                    <CharactersPanelQuery/>
                                    <div className="medical_button_collection">
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
                                                    console.log(" ");
                                                }
                                                return(
                                                    <button onClick={(e)=>{
                                                        if(valor  === '')
                                                            {
                                                                Swal.fire({
                                                                    type: 'error',
                                                                    title: 'Ocurrio un problema',
                                                                    text: 'Debe seleccionar un cita o puede que no tenca citas'
                                                                })
                                                            }
                                                            else
                                                            {   
                                                                addTodo({
                                                                    variables: {
                                                                        id: valor,
                                                                        patient: ""
                                                                    }
                                                                });
                                                            }
                                                            Swal.fire(
                                                                '¡Correcto!',
                                                                'Cita medica eliminada',
                                                                'satisfactoriamente'
                                                                )
                                                            Swal.fire({
                                                                position: 'top-center',
                                                                type: 'success',
                                                                title: 'La cita fue eliminada',
                                                                showConfirmButton: false,
                                                                timer: 2500
                                                            })
                                                        setTimeout(this.reload, 1000);

                                                        }} className="medical_button">Eliminar</button>
                                                    ) 
                                                
                                            }
                                        }
                                        </Mutation>
                                        <Link to="/schedule_appointments">
                                            <button type="submit" className="medical_button medical_button_add">Agregar cita</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}export default MedicalAppointments;