import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute top-20">
              <button className="p-2 bg-white shadow-lg rounded-md text-green-800 font-bold">
                ADD +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-40 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
