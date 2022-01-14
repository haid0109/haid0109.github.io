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

export default GenderIconButton;
