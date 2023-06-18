import React from 'react'
import { useNavigate } from "react-router-dom";

const Facials = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Facials</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>  
  )
}

export default Facials
