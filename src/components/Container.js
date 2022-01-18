import styled from '@emotion/styled'

function Container(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #242931;
    border-radius: .7em;
    margin: 1em;
  `;

  return (
    <Container style={props.style}>
      {props.children}
    </Container>
  );
}

export default Container;
