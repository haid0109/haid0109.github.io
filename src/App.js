import './App.css';
import venusIcon from './gender-female.svg';
import marsIcon from './gender-male.svg';
import plusIcon from './plus.svg';
import minusIcon from './minus.svg';
import { useState } from 'react';

function App() {
  const [gender, setGender] = useState('male');

  return (
    <div className="App">
      <div className="bmi-calculator">
        <h1 className="title">BMI Calculator</h1>
        <div className="male-and-female-container">
          <div
            className="container"
            style={{'backgroundColor': gender == 'male' ? '#242931' : '#1a1e24'}}
            onClick={() => setGender('male')}
          >
            <img src={marsIcon} className="gender-icon" alt="logo" />
            <span>MALE</span>
          </div>
          <div
            className="container"
            style={{'backgroundColor': gender == 'female' ? '#242931' : '#1a1e24'}}
            onClick={() => setGender('female')}
          >
            <img src={venusIcon} className="gender-icon" alt="logo" />
            <span>FEMALE</span>
          </div>
        </div>
        <div id="height" className="container">
          <span>HEIGHT</span>
          <span>
            <span className="stat-number">170</span>cm
          </span>
          <input type="range" min="120" max="220" defaultValue="170" class="height-slider"/>
        </div>
        <div className="weight-and-age-container">
          <div id="weight" className="container">
            <span>WEIGHT</span>
            <span className="stat-number">60</span>
            <div>
              <button className="rounded-icon-button">
                <img src={minusIcon} alt="logo" />
              </button>
              <button className="rounded-icon-button">
                <img src={plusIcon} alt="logo" />
              </button>
            </div>
          </div>
          <div id="age" className="container">
            <span>AGE</span>
            <span className="stat-number">28</span>
            <div>
              <button className="rounded-icon-button">
                <img src={minusIcon} alt="logo" />
              </button>
              <button className="rounded-icon-button">
                <img src={plusIcon} alt="logo" />
              </button>
            </div>
          </div>
        </div>
        <button id="calculateButton" className="calculate-button">CALCULATE</button>
      </div>
    </div>
  );
}

export default App;
