import styled from "styled-components";
import { Props } from '.'


const TitleStyle = styled.h1<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '28px')};
  color: ${(props) => (props.theme.mainTxtColor)};
`

export default TitleStyle