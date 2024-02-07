import styled, { createGlobalStyle } from 'styled-components'

export const HeaderContainer = styled.div`
 display: flex;
`
export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-around;

  padding-top: 32px;
`

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    user-select: none;
  }

  body {
    background-color: ${(props) => props.theme.secBkgColor}
  }
`

export default GlobalStyle