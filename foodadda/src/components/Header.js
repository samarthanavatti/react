import foodLogo from '../assets/food_adda_logo.jpg';
import { Link } from 'react-router-dom';
const Title = () => {
  return (
    <div className="flex items-center">
      <img alt="logo" src={foodLogo} className="h-16" />
      <h2 className="text-2xl ml-2 text-white">Food Adda</h2>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between drop-shadow-md px-10 p-2 bg-yellow-600">
      <Link to="/">
        <Title />
      </Link>

      <ul className="flex items-center">
        <Link to="offers">
          <li className="p-2 m-2 text-xl text-white hover:text-black active:text-white ">
            <h3>Offers</h3>
          </li>
        </Link>
        <Link to="about">
          <li className="p-2 m-2 text-xl text-white hover:text-black active:text-white">
            <h3>About Us</h3>
          </li>
        </Link>
        <li className="p-2 m-2 text-xl text-white hover:text-black visited:text-white">
          <h3> Login </h3>
        </li>
      </ul>
    </div>
  );
};

export default Header;
