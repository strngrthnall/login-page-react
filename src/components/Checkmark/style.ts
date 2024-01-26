import styled from "styled-components";

const CheckmarkStyle = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  
  margin-top: 8px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 12px;
    width: 12px;
    background-color: ${(props) => (props.theme.mainTxtColor)}
  }

  input:checked ~ .checkmark {
    background-color: ${(props) => (props.theme.btnBlue)}
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
   	top: 4px;
  	left: 4px;
  	width: 4px;
  	height: 4px;
  	border-radius: 50%;
  	background: ${(props) => (props.theme.mainTxtColor)};
  }

  p {
    margin-left: 16px;
  }

`
export default CheckmarkStyle