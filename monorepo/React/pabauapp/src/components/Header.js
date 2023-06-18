import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'

const Header = ({children}) => {

  const location = useLocation();

  const [title, setTitle] = useState('Step 1/2')

  useEffect(() => {
  if  (location.pathname === "/"){
      setTitle('Step 1/2')
  }else {
      setTitle('Step 2/2')
  }
  }, [location])
  

  return (
    <div className='header'>
        <h2>Choose Service</h2>
        <p>{[title]}</p>
    </div>
  )
}

export default Header
