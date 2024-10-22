import { useDispatch } from "react-redux";
import { increaseCartNumber ,setDisplayData } from "../../store/slices/addToCartSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, title, price, image , description } = item;
  
  

  const cardItem = { id, title, price, image, quantity: 1 ,description };

  const addedCart = (object) => {
    dispatch(increaseCartNumber(object));
  };

  const openImage = (object2) => {
    dispatch(setDisplayData(object2)); 
    navigate("/item-data"); 
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between gap-2 ">
      <img src={image} alt={title} className="h-56 w-full object-cover cursor-pointer" onClick={() => openImage(cardItem)} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-red-600 text-lg font-bold mb-2 inline-block">Rs.{price}</p>
        <div className="text-gray-500 text-sm font-medium inline-block ml-1 line-through">
                  {item.price * 1.5}
                </div>
        <button
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300 "
          onClick={() => addedCart(cardItem)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
