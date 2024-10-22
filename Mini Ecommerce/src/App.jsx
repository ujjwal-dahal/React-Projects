import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemStore from "./components/ecommerce/ItemStore";
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/ecommerce/ShoppingCart";
import EachItemDesc from "./components/ecommerce/EachItemDesc";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<><Navbar/><h1>This is Home Page</h1></>} />
          <Route path="/store" element={<><Navbar/><ItemStore/></>} />
          <Route path="/about" element={<><Navbar/><h1>This is About Page</h1></>} />
          <Route path="/contact" element={<><Navbar/><h1>This is Contact Page</h1></>} />
          <Route path="/cart" element={<><Navbar/><ShoppingCart/></>} />
          <Route path="/item-data" element={<><Navbar/><EachItemDesc/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
