import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../../constant';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

function filterData(restaurants, searchText) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  getRestaurants = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.557837&lng=73.808423&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <>
      <div className="p-2 m-2 flex justify-center ">
        <input
          className="w-96 p-2 text-md border-2 rounded"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="ml-5 text-black bg-white hover:bg-blue-700  hover:text-white p-2 border-solid border-2 rounded"
          onClick={() => {
            const filteredList = filterData(allRestaurantList, searchText);
            setFilteredRestaurantList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mt-5 mx-10 flex flex-wrap justify-start">
          {filteredRestaurantList?.map((restarunt) => {
            {
              return (
                <RestaurantCard {...restarunt.data} key={restarunt.data.id} />
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default Body;
