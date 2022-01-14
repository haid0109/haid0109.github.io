import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BMICalculator from './pages/BMICalculator';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<BMICalculator />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
