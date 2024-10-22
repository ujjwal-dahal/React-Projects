import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

let ItemStore = () => {
  let [apiData, setApiData] = useState([]);

  let url = "https://fakestoreapi.com/products";
  const handleApi = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <>
      <div id="title" className="text-center font-bold text-3xl mb-5 pt-16">
        Products Dashboard
      </div>
      <div
        id="product-container"
        className="grid grid-cols-4 gap-5 my-10 mx-10 "
      >
        {apiData.length ? (
          apiData.map((item, index) => {
            return <Card item={item} key={item.id} />;
          })
        ) : (
          <div className="text-center text-xl font-bold text-gray-700 col-span-4">
            Loading...
          </div>
        )}
      </div>
    </>
  );
};

export default ItemStore;
