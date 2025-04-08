import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
// import { authContext } from "../Contexts/Auth";
import Navbar from "../Componenets/Navbar/Navbar";
// import LoadingScreen from "../Componenets/LoadingSreen/LoadingScreen";
import Footer from "../Componenets/Footer/Footer";
// import Footer from "../../Componenets/Footer/Footer";
// import Navbar from "../../Componenets/Navbar/Navbar";
// import { authContext } from "../../Contexts/Auth";
// import LoadingScreen from "../../Componenets/LoadingSreen/LoadingScreen";

export default function Layout() {

//  const{isLoading}= useContext(authContext)
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <div className="flex-grow ">
          {/* {isLoading?<LoadingScreen/>:<Outlet />} */}
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
