import { IMG_CDN_URL } from '../constant';
const RestaurantCard = ({ name, area, cuisines, cloudinaryImageId }) => {
  {
    return (
      <div className="card">
        <img
          className="card_logo"
          logo="restaurant logo"
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        />
        <h2>{name}</h2>
        <h3>{area}</h3>
        <h4>{cuisines.join(', ')}</h4>
      </div>
    );
  }
};

export default RestaurantCard;
