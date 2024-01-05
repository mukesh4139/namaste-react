import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between font-bold">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <ItemList items={data.itemCards} />
      </div>

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
