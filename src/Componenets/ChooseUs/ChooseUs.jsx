import React from "react";
import aboutImg1 from "../../assets/pexels-leah-newhouse-50725-3935702.jpg";
import aboutImg2 from "../../assets/pexels-ninauhlikova-287240.jpg";
import aboutImg3 from "../../assets/pexels-pawan-yadav-1321878-2577274.jpg";
import aboutImg4 from "../../assets/pexels-mohamedelaminemsiouri-2108813.jpg";
import aboutImg5 from "../../assets/pexels-cahilrom-2088282.jpg";
export default function ChooseUs() {
  return (
    <div className=" flex flex-col lg:flex-row  my-80 container rounded-xl shadow-md shadow-fuchsia-500">
      <div className="lg:w-1/2 ">
        <div className="mx-28">
          <h3 className="uppercase text-3xl font-bold font-sans text-center pt-12">
            🎯why choose us ?
          </h3>
          <p className="pt-12 text-lg font-semibold font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            eligendi corporis. Blanditiis reiciendis aspernatur provident odio?
            Tempora harum rem illo.
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-7 pt-12 text-lg font-semibold pb-12">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center ">
        <div className=" w-[90%] h-[90%]  py-12  ">
          <div className=" lg:w-[300px] lg:h-[400px] w-[250px] h-[380px]  shadow-lg  rotate-12 m-auto hover:rotate-0 duration-500 transition-all ">
            <img
              src={aboutImg4}
              alt=""
              className=" rounded-lg  shadow-md  h-full object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
