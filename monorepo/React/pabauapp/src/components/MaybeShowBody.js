import React, {useEffect, useState} from 'react'
import { Router, useLocation } from 'react-router-dom'

const MaybeShowBody = ({children}) => {

    const location = useLocation();

    const [showBody, setShowBody] = useState(true)

    useEffect(() => {
    if  (location.pathname === "/"){
        setShowBody(true)
    }else {
        setShowBody(false)
    }
    }, [location])
    

  return (
    <div>
      { showBody && children}
    </div>
  )
}

export default MaybeShowBody
