import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  
  padding: 16px 64px;

  background-color: ${(props) => props.theme.mainBkgColor};

  box-shadow: rgba(17, 17, 26, 0.3) 0px 1px 0px;

  justify-content: space-between;
  align-items: center;

`

export default HeaderStyle