import plusIcon from '../images/plus.svg';
import minusIcon from '../images/minus.svg';

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

export default PlusMinusNumberContainer;
