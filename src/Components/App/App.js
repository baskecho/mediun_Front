import React, { Component } from 'react';
import Router from '../Router'
import './App.css'
//import Login from '../Login/Login.js'


class App extends Component 
{
    render()
    { 
        return ( 
            <div className="app-con">
                <Router/>
            </div>
        );
    }
};export default App;