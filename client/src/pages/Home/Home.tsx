import { useAuth0 } from "@auth0/auth0-react";
import HuddleIcon from "../../assets/logo192.png";
import Button from "../../components/button/Button";
import { Typography } from "../../components/typography/Typography";
import { HomeContainer, Icon, AuthContainer } from "./Home.styled";

function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <HomeContainer>
      <Icon src={HuddleIcon} alt="Huddle icon" />
      <Typography variant="h1">Huddle</Typography>
      <Typography variant="h4">Space for your thoughts</Typography>
      <AuthContainer>
        <Button
          text="Sign up"
          onClick={() => loginWithRedirect({ screen_hint: "signup" })}
        />
        <Button text="Sign in" onClick={() => loginWithRedirect()} />
      </AuthContainer>
    </HomeContainer>
  );
}

export default Home;
