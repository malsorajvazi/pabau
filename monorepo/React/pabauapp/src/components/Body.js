import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntiWrinkle from '../services/AntiWrinkle';
import { Outlet, Link } from "react-router-dom";
import './Body.css'
import { UilGrin } from '@iconscout/react-unicons'
import SecretRF from '../services/SecretRF'
import DermaFillers from '../services/DermaFillers'
import Facials from '../services/Facials'

const Body = () => {


  return (

    <Router>
    <div className='navigationContainer'>
    
    <ul>
        <Link className='link' to='/antiwrinkle'><UilGrin size="25" color="#0E98E6"/>  Anti Wrinkle</Link>
        <Link className='link' to='/dermalfillers'><UilGrin size="25" color="#0E98E6"/>  Dermal Fillers</Link>
        <Link className='link' to='/secretrf'><UilGrin size="25" color="#0E98E6"/>  Secret RF</Link>
        <Link className='link' to='/facials'><UilGrin size="25" color="#0E98E6"/>  Facials</Link>
        <Link className='link' to='/'><UilGrin size="25" color="#0E98E6"/>  Home</Link>
    </ul>

    <Outlet />
    </div>
    
    </Router>
    )
}

export default Body
