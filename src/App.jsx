import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Button } from "@heroui/button";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Pages/UserPages/Home/Home";
import Hotels from "./Pages/UserPages/Hotels/Hotels";
import Tours from "./Pages/UserPages/Tours/Tours";
import Booking from "./Pages/UserPages/Booking/Booking";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ContactUs from "./Pages/UserPages/ContactUs/ContactUs";
import AuthContextProvider from "./Contexts/Auth";
import { ToastContainer } from "react-toastify";
import ProtectedAuthRoute from "./Auth/ProtectedAuthRoute";
import ProtectedRoute from "./Auth/ProtectedRoute";
import OfferTripHotelDetails from "./Pages/UserPages/OfferTripHotelDeltails/OfferTripHotelDetails";
import UserProfile from "./Pages/UserPages/UserProfile/UserProfile";
import Pay from "./Pages/UserPages/Pay/Pay";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "home",
          element: <Navigate to="/" />,
        },
        {
          path: "hotels",
          element: (
            <ProtectedRoute>
              <Hotels />
            </ProtectedRoute>
          ),
        },
        {
          path: "tours",
          element: (
            <ProtectedRoute>
              <Tours />
            </ProtectedRoute>
          ),
        },
        {
          path: "booking",
          element: (
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          ),
        },
        ,
        {
          path: "login",
          element: (
            <ProtectedAuthRoute>
              {" "}
              <Login />
            </ProtectedAuthRoute>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedAuthRoute>
              <Register />
            </ProtectedAuthRoute>
          ),
        },
        {
          path: "contactus",
          element: (
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          ),
        },
        {
          path: "hotels/details",
          element: (
            <ProtectedRoute>
              <OfferTripHotelDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "payment",
          element: (
            <ProtectedRoute>
              <Pay />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <div className="h-screen">
          <HeroUIProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
          </HeroUIProvider>
        </div>
      </AuthContextProvider>
    </>
  );
}
