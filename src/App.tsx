import { ThemeProvider } from "styled-components"
import Header from "./container/Header"
import GlobalStyle, { Container } from "./style"
import darkTheme from './themes/dark';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  )
}

export default App
