import '../styles/BMICalculator.css';
import venusIcon from '../images/gender-female.svg';
import marsIcon from '../images/gender-male.svg';
import { useState, useEffect } from 'react';
import GenderIconButton from '../components/GenderIconButton';
import PlusMinusNumberContainer from '../components/PlusMinusNumberContainer'
import Container from '../components/Container';
import Slider from '../components/Slider';
import Label from '../components/Label';
import StatNumber from '../components/StatNumber';

function BMICalculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);
  const [age, setAge] = useState(21);
  const bmi =  parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
  const bmiCategory = setBmiCategory(bmi);

  useEffect(() => {
    const bmiData = getBmiDataFromSession();
    setGender(bmiData.gender);
    setHeight(bmiData.height);
    setWeight(bmiData.weight);
    setAge(bmiData.age);
  }, []);

  useEffect(() => {
    saveBmiDataInSession(gender, height, weight, age);
  });

  return (
    <div className="bmi-calculator">
      <h1 className="title">BMI Calculator</h1>
      <div className="male-and-female-picker-container">
        <GenderIconButton
          gender="male"
          currentGender={gender}
          changeGender={gender => setGender(gender)}
          icon={marsIcon}
        />
        <GenderIconButton
          gender="female"
          currentGender={gender}
          changeGender={gender => setGender(gender)}
          icon={venusIcon}
        />
      </div>
      <div className='container'>
        <Label>HEIGHT</Label>
        <Label>
          <StatNumber>{height}</StatNumber>cm
        </Label>
        <Slider
          min="120"
          max="220"
          value={height}
          changeHeight={height => setHeight(height)}
        />
      </div>
      <div className="weight-and-age-picker-container">
        <PlusMinusNumberContainer
          label="WEIGHT"
          value={weight}
          changeValue={weight => setWeight(weight)}
        />
        <PlusMinusNumberContainer
          label="AGE"
          value={age}
          changeValue={age => setAge(age)}
        />
      </div>
      <Container>
        <Label>BMI</Label>
        <StatNumber>{bmi}</StatNumber>
        <span
          className='status-text'
          style={{'color': bmiCategory === 'NORMAL' ? 'green' : 'red'}}
        >
          {bmiCategory}
        </span>
      </Container>
    </div>
  );
}

export default BMICalculator;

function setBmiCategory(bmi) {
  if(bmi < 18.5) return 'UNDERWEIGHT';
  else if(bmi < 25) return 'NORMAL';
  else return 'OVERWEIGHT';
}

function getBmiDataFromSession() {
  if(!sessionStorage.getItem('BMIData')) return;

  return JSON.parse(sessionStorage.getItem('BMIData'));
}

function saveBmiDataInSession(gender, height, weight, age) {
  const stringifiedData = JSON.stringify({
    gender,
    height,
    weight,
    age,
  });
  sessionStorage.setItem('BMIData', stringifiedData);
}
