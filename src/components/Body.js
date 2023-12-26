import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  /**
   * State Variable - Super powerful variable
   * whenever a state variable changes, react re-renders the component.
   */
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  /**
   * Above syntax is array destructuring. It is similar to writing:
   * const arr = useState(resList);
   *
   * const [listOfRestaurants, setListOfRestaurants] = arr;
   * OR
   * const listOfRestaurants = arr[0]
   * const setListOfRestaurants = arr[1]
   */

  /**
   * useEffect takes an
   * array function : callback function, it's called after component renders
   * and dependency array.
   */
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5940034&lng=77.3690496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      /**
       * Optional chaining
       */
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants();
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
