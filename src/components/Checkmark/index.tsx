import CheckmarkStyle from "./style"

const Checkmark = () => (
  <CheckmarkStyle>
    <input type="checkbox" name="check" id="" />
    <span className="checkmark"></span>
    <p>Keep me logged in</p>
  </CheckmarkStyle>
)

export default Checkmark