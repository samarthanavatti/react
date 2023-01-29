import { IMG_CDN_URL } from '../../constant';
const RestaurantCard = ({ name, area, cuisines, cloudinaryImageId }) => {
  {
    return (
      <div className="w-40 max-h-70 overflow-auto p-1 bg-gray-50  m-2 border-solid border-2 hover:border-slate-300 hover:shadow-xl hover:cursor-pointer">
        <img
          className="h-30 w-[100%]"
          logo="restaurant logo"
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        />
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="text-xs font-semibold">{area}</h3>
        <h4 className="text-xs">{cuisines.join(', ')}</h4>
      </div>
    );
  }
};

export default RestaurantCard;
