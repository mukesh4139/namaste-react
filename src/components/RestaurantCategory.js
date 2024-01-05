import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordion Header */}
      <div
        className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg p-4"
        onClick={handleClick}
      >
        <div className="flex justify-between font-bold cursor-pointer">
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
