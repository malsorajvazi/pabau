import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'
import AntiWrinkle from './services/AntiWrinkle'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SecretRF from './services/SecretRF'
import DermaFillers from './services/DermaFillers'
import Facials from './services/Facials'

const App = () => {
  return (
      <Router>
      <>
      <Header />
      <Body />
      <div className='footercontainer'>
      <Footer />
      </div>
      </>

          <Routes>
            <Route>
                <Route path="antiwrinkle" element={<AntiWrinkle />} />
                <Route path="dermafillers" element={<DermaFillers />} />
                <Route path="secretrf" element={<SecretRF />} />
                <Route path="facials" element={<Facials />} />
            </Route>
          </Routes>
      </Router>
      
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
