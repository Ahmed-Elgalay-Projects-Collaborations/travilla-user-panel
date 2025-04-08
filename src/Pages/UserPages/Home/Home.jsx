import React from "react";
import HeroImg from "../../../assets/pexels-riciardus-307008.jpg";
import AnimatedText from "../../../Animations/AnimatedText";
import { Tabs, Tab, Card, CardBody, Input, Button } from "@heroui/react";
import Galary from "../../../Componenets/Galary/Galary";

import Avatar from "../../../Componenets/Avatar/Avatar";
import ChooseUs from "../../../Componenets/ChooseUs/ChooseUs";

export default function Home() {
  return (
    <>
      <div
        id="Hero"
        className="relative h-[93vh] w-full bg-cover bg-center overflow-auto "
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white p-10 text-center mt-36">
          <h1 className="text-4xl font-bold ">Welcome to Travilla</h1>
          <p className="mt-2 text-center">
            <AnimatedText />
          </p>
        </div>

        <Avatar />

        <div className="relative w-1/2 mx-auto mt-12 ">
          <p className="mb-5 text-center text-xl font-bold text-white">
            What are you looking for ?
          </p>
          <form className="flex justify-center">
            <Input className=" w-2/3  me-5" placeholder="Search" type="text" />
            <Button color="primary">
              Search <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
          </form>
        </div>
      </div>

      <div className="text-center font-extrabold text-3xl mt-24 font-serif relative  after:content-[''] after:block after:w-32 after:h-1 after:bg-[#071952] after:mt-2 after:mx-auto text-clip text-transparent bg-clip-text bg-gradient-to-b from-[#071952] to-[#088395]">
        <h3>Top Visited</h3>
      </div>

      <div className="container my-16 mx-auto rounded-xl shadow-md shadow-blue-600 bg-slate-100 py-10">
        <Galary />
      </div>

      <div className=" ">
        <ChooseUs />
      </div>
    </>
  );
}
