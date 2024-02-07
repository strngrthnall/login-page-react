import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 0;

  p {
    font-size: 16px;
    color: ${(props) => (props.theme.mainTxtColor)};
    text-align: start;

    padding-left: 16px;
  }

  .boldText {
    font-weight: bold;
  }
`

const AboutStyle = styled.section`

  width: 40%;
`

export default AboutStyle