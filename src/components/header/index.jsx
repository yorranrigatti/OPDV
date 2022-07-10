import { Container } from "./styles";
import Logo from "../../assets/logo-opdv.png"

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="OPDV" />
    </Container>
  );
};

export default Header;
