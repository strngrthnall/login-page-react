import styled from "styled-components";

const SignUpFormStyle = styled.section`
  display: block;
  width: 40%;

  p {
    color: ${(props) => (props.theme.secTxtColor)}
  }
`
export const InputsContainer = styled.div`
  margin: 8px 0;

  input {
    width: 100%;
    font-size: 20px;
    border-radius: 4px;
    border: 2px solid ${(props) => (props.theme.secBkgColor)};

    margin-bottom: 6px;
    padding: 2px 4px;
  }
`

export const NameInputs = styled.div`
  width: 100%;

  display:flex;

  justify-content: space-between;

  input {
    width: 49.5%;
  }
  
`

export const BirthdayInput = styled.div`
  input {
    font-size: 17px;
    color: ${(props) => (props.theme.inactiveTxtColor)};
  }
`

export default SignUpFormStyle