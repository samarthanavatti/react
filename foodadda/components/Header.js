import foodLogo from '../assets/food_adda_logo.jpg';
import { Link } from 'react-router-dom';
const Title = () => {
  return (
    <div className="logo-container">
      <img alt="logo" src={foodLogo} className="logo" />
      <h2>Food Adda</h2>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header-contaier">
      <div class="title-container">
        <Link to="/">
          <Title />
        </Link>
      </div>
      <div class="nav-list-container">
        <ul>
          <Link to="offers">
            <li>
              <h3>Offers</h3>
            </li>
          </Link>
          <Link to="about">
            <li>
              <h3>About Us</h3>
            </li>
          </Link>
          <li>
            <h3> Login </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
