import styled from "@emotion/styled";

function Label(props) {
  const Label = styled.span`
    font-size: 1.2em;
    color: gray;
  `;

  return (
    <Label>
      {props.children}
    </Label>
  );
}

export default Label;
