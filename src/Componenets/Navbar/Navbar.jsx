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
import { useLocation, useNavigate, Link } from "react-router-dom";
import { authContext } from "../../Contexts/Auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { IsLogedin, setIsLogedin } = useContext(authContext);

  const menuLinks = [
    { path: "/", label: "Home", icon: <i className="fa-solid fa-house"></i> },
    {
      path: "/hotels",
      label: "Hotels",
      icon: <i className="fa-solid fa-hotel"></i>,
    },
    {
      path: "/tours",
      label: "Tours",
      icon: <i className="fa-solid fa-suitcase-rolling"></i>,
    },

  ];

  const Logout = () => {
    localStorage.removeItem("token");
    setIsLogedin(false);
    navigate("/login");
  };

  return (
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
              className="rounded-full h-10 w-10 me-5"
              src={navImg}
              alt="logo"
            />
          </Link>
          <Link to="/">
            <p className="font-bold text-3xl text-blue-400 line-through">
              Travilla
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {IsLogedin && (
        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          {menuLinks.map(({ path, label, icon }) => (
            <NavbarItem key={label}>
              <Link
                to={path}
                className="flex items-center gap-2 font-bold uppercase"
              >
                {icon} {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        {IsLogedin ? (
          <NavbarItem className="flex gap-2">
            <Button
              isIconOnly
              className="bg-[#071952] text-white hover:bg-[#088395] rounded-full"
              onPress={() => navigate("/profile")}
            >
              <i className="fa-solid fa-user text-lg"></i>
            </Button>

            <Button onPress={Logout}>Log out</Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="lg:flex">
              <Link to="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" to="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {IsLogedin && (
        <NavbarMenu>
          {menuLinks.map(({ path, label }) => (
            <NavbarMenuItem key={label}>
              <Link to={path} className="w-full text-lg">
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </NextUiNavbar>
  );
}
