import styled from 'styled-components'

const AbtIconStyle = styled.div`
  color: ${(props) => ( props.color === 'main' ?
  props.theme.secTxtColor :
    props.theme.inactiveTxtColor
  )}
`

export default AbtIconStyle