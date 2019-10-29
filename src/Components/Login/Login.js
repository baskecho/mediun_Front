import React, { Component } from 'react';
import './Login.css';




class Login extends Component{

    userRef = React.createRef();
    passwordRef = React.createRef();


    establishLogiN = (e) =>
    {
        e.preventDefault();

        const user = this.userRef.current.value,
            password = this.passwordRef.current.value;

        const infLogin = {
            user, 
            password 
        }

        this.props.establishLogiN(infLogin);
    };



    render(){
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto ">
                            <div className="card p-5 border border-dark">
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
                                    <button   className="button-login mt-1">Entrar</button>
                                    <a href="/" className="link-login">¿No puede iniciar sesión?</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};export default Login;