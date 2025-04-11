import React from "react";
import HeroImg from "../../../assets/pexels-riciardus-307008.jpg";
import AnimatedText from "../../../Animations/AnimatedText";
import { Tabs, Tab, Card, CardBody, Input, Button } from "@heroui/react";
import Galary from "../../../Componenets/Galary/Galary";

import Avatar from "../../../Componenets/Avatar/Avatar";
import ChooseUs from "../../../Componenets/ChooseUs/ChooseUs";
import Offers from "../../../Componenets/Offers/Offers";

export default function Home() {
  return (
    <>
      <div
  id="Hero"
  className="relative h-[93vh] w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${HeroImg})` }}
>
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
    <h1 className="text-5xl font-bold mb-4">Welcome to Travilla</h1>
    <p className="text-xl mb-8">
      <AnimatedText />
    </p>

    <Avatar />

    <div className="w-full max-w-xl mt-12">
      <p className="mb-4 text-xl font-bold text-white">
        What are you looking for?
      </p>
      <form className="flex justify-center items-center gap-4">
        <Input
          className="flex-grow bg-white text-black px-4 py-2 rounded-md"
          placeholder="Search"
          type="text"
        />
        <Button color="primary" className="px-6 py-2">
          Search <i className="fa-solid fa-magnifying-glass ml-2"></i>
        </Button>
      </form>
    </div>
  </div>
</div>


      <div className="my-8">
        <Offers />
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
