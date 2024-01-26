import styled from "styled-components";


const ButtonStyle = styled.button`
  background-color: ${(props) => (
    props.color === 'green' ? props.theme.btnGreen : props.theme.btnBlue
)};
  color: ${(props) => (props.theme.mainTxtColor)};
  border: medium none;
  font-weight: 900;
  
  padding: 4px 16px;
  height: 26px;

  border-radius: 2px;
`

export default ButtonStyle