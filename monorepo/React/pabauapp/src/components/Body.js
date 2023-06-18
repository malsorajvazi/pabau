import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntiWrinkle from '../services/AntiWrinkle';
import { Link } from "react-router-dom";
import './Body.css'
import antiwrinkleimg from "./images/antiwrinkleimg.jpg"
import dermafillersimg from "./images/dermafillersimg.jpg"
import secretrfimg from "./images/secretrfimg.jpg"
import facialsimg from "./images/facialsimg.jpeg"


const Body = () => {


  return (
    
    
    <div className='navigationContainer'>
    
    <ul>
        <Link className='link' to='/antiwrinkle'><span><img src={antiwrinkleimg}/></span>  Anti Wrinkle</Link>
        <Link className='link' to='/dermafillers'><span><img src={dermafillersimg}/></span>  Derma Fillers</Link>
        <Link className='link' to='/secretrf'><span><img src={secretrfimg}/></span>  Secret RF</Link>
        <Link className='link' to='/facials'><span><img src={facialsimg}/></span>    Facials</Link>
        
    </ul>

      <Routes>
        <Route path="/antiwrinkle " element={<AntiWrinkle/>} />
      </Routes>

    </div>
    
    )
}

export default Body
