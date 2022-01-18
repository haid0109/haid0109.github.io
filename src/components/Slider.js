import styled from "@emotion/styled";
import "../styles/Slider.css";

function Slider(props) {
  return (
    <input
      className="slider"
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={(e) => props.changeHeight(e.target.value)}
    />
  );
}

export default Slider;
