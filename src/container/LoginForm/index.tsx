import Button from "../../components/Button";
import Checkmark from "../../components/Checkmark";
import Title from "../../components/Title";
import LoginFormStyle from "./styles";

const LoginForm = () => (
  <LoginFormStyle>
    <div className="email">
      <Title fontSize={12}>Email or Phone</Title>
      <input type="email" />
      <Checkmark />
    </div>
    <div className="passwd">
      <Title fontSize={12}>Password</Title>
      <input type="password" />
      <a href="/">Can't log in?</a>
    </div>
    <Button>Login</Button>
  </LoginFormStyle>
)

export default LoginForm