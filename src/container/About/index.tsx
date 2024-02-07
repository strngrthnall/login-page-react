import AbtIcons from "../../components/AbtIcons";
import Title from "../../components/Title";
import AboutStyle, { DescriptionContainer } from "./styles";

const About = () => (
  <AboutStyle>
    <Title fontSize={26}>
      Connect with friends and the world around you on Facebook.
    </Title>
    <br />
    <DescriptionContainer>
      <AbtIcons color={'main'} iconSize={36} />
      <p className="boldText">See photos and updates</p>
      <p>from friends in News Feed.</p>
    </DescriptionContainer>
    <DescriptionContainer>
      <AbtIcons iconType="share" color={'main'} iconSize={36} />
      <p className="boldText">Share what's new</p>
      <p>in your life on your Timeline.</p>
    </DescriptionContainer>
    <DescriptionContainer>
      <AbtIcons iconType="find" color={'main'} iconSize={36} />
      <p className="boldText">Find more</p>
      <p>of what you're looking for with Graph Search.</p>
    </DescriptionContainer>
  </AboutStyle>
)

export default About