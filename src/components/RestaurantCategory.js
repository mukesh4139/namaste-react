import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("Button Clicked");
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>

          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
