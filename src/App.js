import './App.css';
import { Route, Routes } from 'react-router-dom';
import BMICalculator from './BMICalculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BMICalculator />}/>
      </Routes>
    </div>
  );
}

export default App;
