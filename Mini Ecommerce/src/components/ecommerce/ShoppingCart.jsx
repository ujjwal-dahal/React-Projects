import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteItem } from "../../store/slices/addToCartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.addToCart.data);

  const deleteItemFromCart = ({id , quantity}) => {
    let ourData = {id , quantity}
    dispatch(deleteItem(ourData));
  };

  return (
    <div className="container mx-auto pt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      {dataList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dataList.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col relative h-auto"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <div className="text-red-500 text-xl font-bold">
                  Rs.{item.price}
                </div>

                <div className="text-green-700 font-medium">
                  Quantity: {item.quantity}
                </div>
              </div>

              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg 
                hover:bg-red-700 transition duration-300 ease-in-out flex items-center"
                onClick={() => deleteItemFromCart({id : item.id ,quantity : item.quantity})}
              >
                <MdDelete className="mr-2" />
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-bold text-gray-700 col-span-4">
          Your cart is empty!
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
