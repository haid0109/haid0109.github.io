import styled from '@emotion/styled';
import plusIcon from '../images/plus.svg';
import minusIcon from '../images/minus.svg';
import Container from './Container';
import Label from './Label';
import StatNumber from './StatNumber';

function PlusMinusNumberContainer(props) {
  const RoundedIconButton = styled.button`
    background-color: #4C4F5E;
    border: none;
    border-radius: 100%;
    margin: .5em;
    cursor: pointer;
  `;

  const Icon = styled.img`
    height: 4em;
  `;

  return (
    <Container>
      <Label>{props.label}</Label>
      <StatNumber>{props.value}</StatNumber>
      <div>
        <RoundedIconButton onClick={() => props.changeValue(props.value - 1)}>
          <Icon src={minusIcon} alt='minus-icon' />
        </RoundedIconButton>
        <RoundedIconButton onClick={() => props.changeValue(props.value + 1)}>
          <Icon src={plusIcon} alt='plus-icon' />
        </RoundedIconButton>
      </div>
    </Container>
  );
}

export default PlusMinusNumberContainer;
