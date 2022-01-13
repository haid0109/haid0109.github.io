import { useSearchParams, Link } from 'react-router-dom';

function Results() {
  const [searchParams] = useSearchParams();
  const height = searchParams.get('height');
  const weight = searchParams.get('weight');
  const bmi =  parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
  let status;
  let text;

  if(bmi < 18.5) {
    status = 'UNDERWEIGHT';
    text = 'Eat more'
  }
  else if(bmi < 25) {
    status = 'NORMAL';
    text = 'Nothing to see here';
  }
  else {
    status = 'OVERWEIGHT';
    text = 'Eat less';
  }

  return (
    <div className="bmi-calculator">
      <h1 className="title">Results</h1>
      <div className="container">
        <span
          className='status-text'
          style={{'color': status === 'NORMAL' ? 'green' : 'red'}}
        >
          {status}
        </span>
        <span className='bmi'>{bmi}</span>
        <span className='text'>{text}</span>
      </div>
      <Link
        className="calculate-button"
        to={{
          pathname: '/',
        }}
      >
        RE-CALCULATE
      </Link>
    </div>
  );
}

export default Results;
