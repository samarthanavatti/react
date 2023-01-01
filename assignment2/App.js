import ReactDOM from 'react-dom/client';
import natureImage from './assets/nature.jpg';

const bodyElement = (
  <div id="container">
    <h1> This is react app with functional component</h1>
    <h2> React element is created with JSX</h2>
  </div>
);

const imageElement = <img src={natureImage} alt="nature image" />;

const HeaderComponet = function () {
  return (
    <div className="header">
      <div className="header__label">Namste React</div>
      <div className="header__about">About</div>
    </div>
  );
};

const LandingComponent = () => (
  <div>
    <HeaderComponet />
    <div className="body_container">
      {bodyElement}
      {imageElement}
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LandingComponent />);
