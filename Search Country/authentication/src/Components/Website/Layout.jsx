import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useContext } from "react";
import { myContext } from "../../App";


function Layout(){

  let {isLogin , setIsLogin} = useContext(myContext)

  return <>
    <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
    <Outlet />
    <Footer />
  </>
}

export default Layout;