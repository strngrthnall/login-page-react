import Title from "../../components/Title"
import SignUpFormStyle, { BirthdayInput, InputsContainer, NameInputs } from "./styles"

const currentDate = new Date().toISOString().slice(0, 10);

const SignUpForm = () => (
  <SignUpFormStyle>
    <Title fontSize={36}>Sign Up</Title>
    <p>It's free and always will be</p>
    <InputsContainer>
      <NameInputs>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </NameInputs>
      <input type="email" placeholder="Email" />
      <input type="email" placeholder="Re-enter email" />
      <input type="password" placeholder="New password" />
    </InputsContainer>
    <Title fontSize={24}>Birthday</Title>
    <BirthdayInput>
      <input
        type="date"
        name="trip-start"
        value="2002-07-22"
        min="1900-01-01"
        max={currentDate}
      />
    </BirthdayInput>
  </SignUpFormStyle>
)

export default SignUpForm