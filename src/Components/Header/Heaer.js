import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'


class Header extends Component
{
    render() 
    { 
        return (
            <Link to={'/'} className = "a-title">medi<span>UN</span></Link>
        );
    }
};export default Header;