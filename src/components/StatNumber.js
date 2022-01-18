import styled from "@emotion/styled";

function StatNumber(props) {
  const StatNumber = styled.span`
    color: white;
    font-size: 3.5em;
    font-weight: 900;
  `;

  return (
    <StatNumber>
      {props.children}
    </StatNumber>
  );
}

export default StatNumber;
