import foodLogo from '../assets/food_adda_logo.jpg';
import { Link } from 'react-router-dom';
const Title = () => {
  return (
    <Link to="/">
      <div className="title-container">
        <img alt="logo" src={foodLogo} className="logo" />
        <h2>Food Adda</h2>
      </div>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="header-contaier">
      <Title />
      <ul>
        <Link to="offers">
          <li>Offers</li>{' '}
        </Link>
        <Link to="about">
          <li>About Us</li>
        </Link>
        <li> Login </li>
      </ul>
    </div>
  );
};

export default Header;
