import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-3 p-3 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-md">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

/**
 * Higher Order Component
 * input - RestaurantCard => RestaurantCardPromoted
 */

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const DiscountInfo = props.resData.info.aggregatedDiscountInfoV3;
    const Label = DiscountInfo["header"] + " " + DiscountInfo["subHeader"];
    return (
      <div className="relative">
        <div className="absolute top-32 text-xl font-bold left-8 text-white">
          <label>{Label}</label>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
