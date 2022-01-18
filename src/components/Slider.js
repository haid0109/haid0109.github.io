import styled from "@emotion/styled";

function Slider(props) {
  const Slider = styled.input`
    -webkit-appearance: none;
    width: 90%;
    height: 3px;
    margin: 2em;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background-color: #EB1555;
    }

    ::-moz-range-thumb {
      -webkit-appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background-color: #EB1555;
    }
  `;

  return (
    <Slider
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={(e) => props.changeHeight(e.target.value)}
    />
  );
}

export default Slider;
