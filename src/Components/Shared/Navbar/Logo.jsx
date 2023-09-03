import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";

const Logo = () => {
  return <Link to="/"><img src={logoImg} width='100' height='100' alt="logo" /></Link>
};

export default Logo;
