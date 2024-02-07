import { ThemeProvider } from "styled-components"
import Header from "./container/Header"
import GlobalStyle, { BodyContainer, HeaderContainer } from "./style"
import darkTheme from './themes/dark';
import SignUpForm from "./container/SingUpForm";
import About from "./container/About";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <About />
        <SignUpForm />
      </BodyContainer>
    </ThemeProvider>
  )
}

export default App
