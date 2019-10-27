import React, { Component } from 'react'
import './Login.css'


class Login extends Component{
    render(){
        return(
            <div className="login">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 mx-auto ">
                            <div class="card p-5 border border-dark">
                                <form>
                                    <div className="form-group">
                                        <label className="title-form-login">Iniciar Sesión</label>
                                        <input type="text" className="settings-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="  NOMBRE DE USUARIO"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="settings-input" id="exampleInputPassword1" placeholder="  CONTRASEÑA"/>
                                    </div>
                                    <div className="form-group form-check mt-5">
                                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Permanecer Conectado</label>
                                    </div>
                                    <button type="submit" className="button-login mt-1">Entrar</button>
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