import React from 'react'
import { useNavigate } from "react-router-dom";

const SecretRF = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Secret RF</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default SecretRF
