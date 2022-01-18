import styled from '@emotion/styled'
import Container from "./Container";
import Label from './Label';

function GenderIconButton(props) {
  const GenderIconButton = styled.div`
    display: flex;
    flex: 1;
  `;

  const Icon = styled.img`
    height: 9em;
  `;

  return (
    <GenderIconButton onClick={() => props.changeGender(props.gender)}>
      <Container
        style={{'backgroundColor': props.currentGender === props.gender ? '#242931' : '#1a1e24'}}
      >
        <Icon src={props.icon} alt="gender-icon"/>
        <Label>{props.gender.toUpperCase()}</Label>
      </Container>
    </GenderIconButton>
  );
}

export default GenderIconButton;
