import './App.css';
import venusIcon from './gender-female.svg';
import marsIcon from './gender-male.svg';
import plusIcon from './plus.svg';
import minusIcon from './minus.svg';
import { useState } from 'react';

function App() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);
  const [age, setAge] = useState(21);

  return (
    <div className="App">
      <div className="bmi-calculator">
        <h1 className="title">BMI Calculator</h1>
        <div className="male-and-female-container">
          <GenderIconButton
            gender="male"
            genderState={{gender, setGender}}
            icon={marsIcon}
          />
          <GenderIconButton
            gender="female"
            genderState={{gender, setGender}}
            icon={venusIcon}
          />
        </div>
        <div className="container">
          <span>HEIGHT</span>
          <span>
            <span className="stat-number">{height}</span>cm
          </span>
          <input
            type="range"
            min="120"
            max="220"
            className="height-slider"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="weight-and-age-container">
          <div className="container">
            <span>WEIGHT</span>
            <span className="stat-number">{weight}</span>
            <div>
              <button className="rounded-icon-button" onClick={() => setWeight(weight - 1)}>
                <img src={minusIcon} alt="logo" />
              </button>
              <button className="rounded-icon-button" onClick={() => setWeight(weight + 1)}>
                <img src={plusIcon} alt="logo" />
              </button>
            </div>
          </div>
          <div className="container">
            <span>AGE</span>
            <span className="stat-number">{age}</span>
            <div>
              <button className="rounded-icon-button" onClick={() => setAge(age - 1)}>
                <img src={minusIcon} alt="logo" />
              </button>
              <button className="rounded-icon-button" onClick={() => setAge(age + 1)}>
                <img src={plusIcon} alt="logo" />
              </button>
            </div>
          </div>
        </div>
        <button className="calculate-button">CALCULATE</button>
      </div>
    </div>
  );
}

function GenderIconButton(props) {
  return (
    <div
    className="container"
    style={{'backgroundColor': props.genderState.gender === props.gender ? '#242931' : '#1a1e24'}}
    onClick={() => props.genderState.setGender(props.gender)}
    >
      <img src={props.icon} className="gender-icon" alt="logo" />
      <span>{props.gender.toUpperCase()}</span>
    </div>
  );
}

export default App;
