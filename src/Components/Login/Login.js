import React, { Component } from 'react';
import Swal from 'sweetalert2';
import './Login.css';


import {Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';




class Login extends Component{

    userRef = React.createRef();
    passwordRef = React.createRef();


    establishLogiN = (apiLogin) =>
    {
        this.props.establishLogiN(apiLogin);
    };



    render(){
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto ">
                            <div className="card p-5 border border-dark">
                                <Mutation mutation={gql`mutation ($email: String!, $password: String!){
                                        createSession(session: {
                                            email: $email
                                            password: $password
                                        }) {
                                            id
                                            email
                                            name
                                            nickname
                                            token
                                            type
                                            client
                                            uid
                                        }
                                    }`}>
                                    {
                                        (addTodo,{data }) => {
                                            if(data == null)
                                            {
                                                
                                            }
                                            else
                                            {
                                                console.log(this.userRef.current.value)
                                                console.log(this.passwordRef.current.value);
                                                this.establishLogiN(data);
                                            }
                                            
                                            return(
                                                    <form onSubmit={this.establishLogiN}>
                                                        <div className="form-group">
                                                            <label className="title-form-login">Iniciar Sesión</label>
                                                            <input type="text"  ref={this.userRef}  className="settings-input"  placeholder="  NOMBRE DE USUARIO"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" ref={this.passwordRef} className="settings-input" placeholder="  CONTRASEÑA"/>
                                                        </div>
                                                        <div className="form-group form-check mt-5">
                                                            <input type="radio"  className="form-check-input" id="exampleCheck1"/>
                                                            <label className="form-check-label" htmlFor="exampleCheck1">Permanecer Conectado</label>
                                                        </div>
                                                        <button  onClick={(e)=>{
                                                        e.preventDefault();

                                                        if(this.userRef.current.value ==='' || this.passwordRef.current.value === '')
                                                        {
                                                            Swal.fire({
                                                                type: 'error',
                                                                title: 'Ocurrio un problema',
                                                                text: 'El usuario o la contraseña no es correcta'
                                                            })
                                                        }
                                                        else
                                                        {
                                                            addTodo({
                                                            variables: {
                                                                email: this.userRef.current.value,
                                                                password: this.passwordRef.current.value
                                                            }});
                                                        }
                                                        

                                                    }} className="button-login mt-1">Entrar</button>
                                                        <a href="/" className="link-login">¿No puede iniciar sesión?</a>
                                                    </form>
                                                ) 
                                        }
                                    }
                                </Mutation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};export default Login;





//"ercruzr@unal.edu.co"




