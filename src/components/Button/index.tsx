import ButtonStyle from "./style"


export type Props = {
  children: string
  color?: string
}

const Button = (props: Props) => (
  <>
    <ButtonStyle color={props.color}>{props.children}</ButtonStyle>
  </>
)

export default Button