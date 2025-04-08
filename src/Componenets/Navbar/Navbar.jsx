import React, { useContext } from "react";
import navImg from "../../assets/pexels-freestockpro-1008155.jpg";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authContext } from "../../Contexts/Auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { IsLogedin, setIsLogedin } = useContext(authContext);
  const location = useLocation();
  const menuItems = [
    <Link to="/">
      <i class=" fa-solid fa-house m-0 p-0"></i>
    </Link>,
    "home",
    <Link to="hotels">
      <i class=" fa-solid fa-hotel "></i>
    </Link>,
    "hotels",
    <Link to="tours">
      <i class=" fa-solid fa-suitcase-rolling"></i>
    </Link>,
    "tours",
    <Link to="booking">
      {" "}
      <i class=" fa-solid fa-list-ul"></i>
    </Link>,
    "booking",
  ];
  

  const Logout = function () {
    localStorage.removeItem("token");
    setIsLogedin(false);
    navigate("/login");
  };

  return (
    <>
      <NextUiNavbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          {IsLogedin && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          )} 
          <NavbarBrand>
            <Link to="/">
              <img
                className="rounded-[50%] h-10 w-10 me-5"
                src={navImg}
                alt=""
              />
            </Link>
            <Link to="/">
              <p className="font-bold text-inherit line-through text-blue-400 h-fit my-auto text-3xl ">
                Travilla
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/* ///////////////////////////////////// */}
        {IsLogedin && (
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                className="font-bold uppercase"
                color="foreground"
                to={item == menuItems[0] ? "" : "/" + item}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        )}
        {/* ///////////////////////////////////////////// */}
        {IsLogedin ? (
          <NavbarContent justify="end">
            <NavbarItem>
              <Button onPress={Logout}>Log out</Button>
            </NavbarItem>
          </NavbarContent>
        ) : (
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" to="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        )}
        {/* ///////////////////////////////////////////////// */}

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" color={"foreground"} to="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextUiNavbar>
    </>
  );
}
