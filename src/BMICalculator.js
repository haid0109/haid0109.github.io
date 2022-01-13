import './BMICalculator.css';
import venusIcon from './gender-female.svg';
import marsIcon from './gender-male.svg';
import plusIcon from './plus.svg';
import minusIcon from './minus.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function BMICalculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);
  const [age, setAge] = useState(21);

  return (
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
        <PlusMinusNumberContainer
          label="WEIGHT"
          state={{
            value: weight,
            setState: setWeight,
          }}
        />
        <PlusMinusNumberContainer
          label="AGE"
          state={{
            value: age,
            setState: setAge,
          }}
        />
      </div>
      <Link
        className="calculate-button"
        to={{
          pathname: '/results',
          search: `?gender=${gender}&height=${height}&weight=${weight}&age=${age}`,
        }}
      >
        CALCULATE
      </Link>
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

function PlusMinusNumberContainer(props) {
  return (
    <div className="container">
      <span>{props.label}</span>
      <span className="stat-number">{props.state.value}</span>
      <div>
        <button className="rounded-icon-button" onClick={() => props.state.setState(props.state.value - 1)}>
          <img src={minusIcon} alt="logo" />
        </button>
        <button className="rounded-icon-button" onClick={() => props.state.setState(props.state.value + 1)}>
          <img src={plusIcon} alt="logo" />
        </button>
      </div>
    </div>
  );
}

export default BMICalculator;
