import React from "react";

import Img1 from "../../assets/OIP (1).jpeg";
import Img2 from "../../assets/OIP (2).jpeg";
import Img3 from "../../assets/download (1).jpeg";
import Img4 from "../../assets/OIP.jpg";
import Img5 from "../../assets/download.jpeg";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Galary() {
  return (
    
    <div className="max-w-[1200px] gap-5 grid grid-cols-12 grid-rows-2 px-8 m-auto">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Link className="h-full">
          <CardHeader className="absolute z-10 bottom-5 flex-col items-start">
            <h4 className="text-white font-serif font-bold text-xl">
              Istanbul
            </h4>
            <h6 className="text-white mt-2">Lorem ipsum dolor sit amet.</h6>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover hover:scale-110"
            src={Img1}
          />
        </Link>
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Link className="h-full">
          <CardHeader className="absolute z-10 bottom-5 flex-col items-start">
            <h4 className="text-white font-serif font-bold text-xl">Paris</h4>
            <h6 className="text-white mt-2">Lorem ipsum dolor sit amet.</h6>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover hover:scale-110"
            src={Img4}
          />
        </Link>
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Link className="h-full">
          <CardHeader className="absolute z-10 bottom-5 flex-col items-start ">
            <h4 className="text-white font-serif font-bold text-xl">London</h4>
            <h6 className="text-white mt-2">Lorem ipsum dolor sit amet.</h6>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover hover:scale-110"
            src={Img5}
          />
        </Link>
      </Card>

      <Card className="w-full h-[300px] col-span-12 sm:col-span-5">
        <Link className="h-full">
          <CardHeader className="absolute z-10 bottom-5 flex-col items-start">
            <h4 className="text-white font-serif font-bold text-xl">Tokyo</h4>
            <h6 className="text-white mt-2">Lorem ipsum dolor sit amet.</h6>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full  object-cover hover:scale-110  "
            src={Img2}
          />
        </Link>
      </Card>

      <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 bottom-5 flex-col items-start">
          <h4 className="text-white font-serif font-bold text-xl">Cairo</h4>
          <h6 className="text-white mt-2">Lorem ipsum dolor sit amet.</h6>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover hover:scale-110"
          src={Img3}
        />
      </Card>
    </div>
  );
}
