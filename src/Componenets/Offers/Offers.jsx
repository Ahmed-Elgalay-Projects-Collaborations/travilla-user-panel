import React from "react";
import Slider from "react-slick";
import { Button, ButtonGroup } from "@heroui/button";
// const { id } = useParams();
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const offersDecor = (
    <>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
      <div className="w-2 h-2 bg-[#328b55] rounded-full"></div>
    </>
  );


  //   const [timeLeft, setTimeLeft] = useState({
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   });

  //   useEffect(() => {
  //     const endDate = new Date();
  //     endDate.setDate(endDate.getDate() + 3);

  //     const interval = setInterval(() => {
  //       const now = new Date();
  //       const diff = endDate - now;

  //       if (diff <= 0) {
  //         clearInterval(interval);
  //         return;
  //       }

  //       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //       const minutes = Math.floor((diff / (1000 * 60)) % 60);
  //       const seconds = Math.floor((diff / 1000) % 60);

  //       setTimeLeft({ days, hours, minutes, seconds });
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  const offer = (
    <>
      <div>
        <section className="pt-12">
          <div className="bg-[#C2EFD4] mx-auto max-w-[1400px] w-full relative flex flex-col-reverse lg:flex-row justify-around items-center px-6 py-10 gap-10">
            <div className="absolute left-4 bottom-4 w-[156px] h-[110px] grid grid-cols-4 gap-1">
              {offersDecor}
            </div>

            <div className="absolute right-4 bottom-6 grid grid-cols-4 gap-10">
              {offersDecor}
            </div>

            <img
              src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg"
              alt=""
              className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full z-10"
            />

            <div className="w-full max-w-[600px] text-center lg:text-left">
              <h2 className="text-[#224f34] text-3xl sm:text-4xl md:text-[46px] font-bold font-['Roboto_Slab']">
                Exclusive offer
              </h2>
              <p className="text-[#224f34] text-base sm:text-lg md:text-[22px] font-medium font-['Poppins'] leading-7 md:leading-9 mt-4">
                Discover the world for less - Up to 40% off on top travel
                destinations!
              </p>

              <div className="flex justify-center lg:justify-start flex-wrap gap-5 my-10 font-['Poppins']">
                <div className="w-[80px] sm:w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-md">
                  <span className="block text-[#224f34] text-2xl sm:text-[32px] font-semibold">
                    6
                  </span>
                  <span className="block text-[#224f34] text-sm sm:text-base font-medium">
                    Days
                  </span>
                </div>
                <div className="w-[80px] sm:w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-md">
                  <span className="block text-[#224f34] text-2xl sm:text-[32px] font-semibold">
                    13
                  </span>
                  <span className="block text-[#224f34] text-sm sm:text-base font-medium">
                    Hours
                  </span>
                </div>
                <div className="w-[80px] sm:w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-md">
                  <span className="block text-[#224f34] text-2xl sm:text-[32px] font-semibold">
                    48
                  </span>
                  <span className="block text-[#224f34] text-sm sm:text-base font-medium">
                    min
                  </span>
                </div>
              </div>

              <Button
                color="success"
                className="px-10 sm:px-16 py-7 bg-[#224f34] rounded-[3px] shadow-md text-white text-base sm:text-xl font-medium font-['Poppins'] uppercase"
                onPress={() => navigate(`/hotels/details`)}
              >
                book now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  return (
    <>
      <Slider {...settings}>
        {offer}
        {offer}
        {offer}
        {offer}
        {offer}
        {offer}
      </Slider>
    </>
  );
}
