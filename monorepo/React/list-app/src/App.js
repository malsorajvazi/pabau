import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to the List App!</h1>
      <ul>
        <li>
          <Link to="/item/1">Item 1</Link>
        </li>
        <li>
          <Link to="/item/2">Item 2</Link>
        </li>
        <li>
          <Link to="/item/3">Item 3</Link>
        </li>
        <li>
          <Link to="/item/4">Item 4</Link>
        </li>
      </ul>
    </div>
  );
}

function ItemDetails() {
  return (
    <div>
      <h1>Item Details</h1>
      <Outlet />
    </div>
  );
}

function Item({ itemId }) {
  return <h2>Item {itemId} Details</h2>;
}

function App() {
  const [currentStep, setCurrentStep] = useState('1/2');

  const handleStepChange = () => {
    setCurrentStep('2/2');
  };

  const handleBackButton = () => {
    setCurrentStep('1/2');
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>{`Step ${currentStep}`}</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<ItemDetails />} />
          <Route path="/item/:itemId" element={<Item />} />
        </Routes>
        {currentStep === '2/2' && (
          <footer>
            <button onClick={handleBackButton}>Back</button>
          </footer>
        )}
      </div>
    </Router>
  );
}

export default App;
