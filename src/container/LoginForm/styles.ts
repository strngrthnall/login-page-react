import styled from "styled-components";

const LoginFormStyle = styled.div`
  display: flex;
  align-items: center;

  .email, .passwd {
    display: grid;
    grid: 1fr;
    justify-content: start;
    padding: 4px 8px;
  }

  input:focus {
    outline: none;
  }

  input {
    padding: 0 2px;
    border-width: 0;

    background-color: ${(props) => (props.theme.mainTxtColor)};
    color: ${(props) => (props.theme.mainBkgColor)};
  }

  label, a {
      font-size: 12px;
      color: ${(props) => (props.theme.inactiveTxtColor)}
  }

  a {
    text-decoration: none;
    padding-top: 8px;
    height: 22px;
  }

  Button {
    margin-bottom: 8px;
  }
`

export default LoginFormStyle
