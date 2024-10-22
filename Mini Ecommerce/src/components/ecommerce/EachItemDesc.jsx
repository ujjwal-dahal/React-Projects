import { useSelector } from "react-redux";

const EachItemDesc = () => {
  const item = useSelector((state) => state.addToCart.displayData);

  const objectItemLength = Object.keys(item).length;

  return (
    <>
      {objectItemLength > 0 ? (
        <div className="container mx-auto p-32 flex flex-col md:flex-row items-start gap-8">
          <div className="w-2/5 md:w-2/5 h-2/5">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <p className="text-red-600 text-lg font-bold mb-2 inline-block">
              Rs.{item.price}
            </p>
            <div className="text-gray-500 text-sm font-medium inline-block ml-1 line-through">
              Rs.{(item.price * 1.5).toFixed(2)}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg font-semibold pt-20">
          No item data available.
        </div>
      )}
    </>
  );
};

export default EachItemDesc;
