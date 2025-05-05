import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HotelDetails() {
  const navigate = useNavigate();
  const [nights, setNights] = useState(1);

  const handleIncrease = () => setNights(nights + 1);
  const handleDecrease = () => {
    if (nights > 1) setNights(nights - 1);
  };

  return (
    <section className="container mx-auto p-6 md:p-12 antialiased">
      <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-4xl group cursor-pointer transform duration-500 hover:-translate-y-1 rounded-lg overflow-hidden border">
        <img
          className="w-full max-h-[400px] object-cover md:w-64"
          src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
          alt="Hotel"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div className="p-5">
            <h1 className="text-3xl font-bold text-gray-800">Momo Inn Hotel</h1>
            <p className="text-gray-500 text-lg mt-2">
              A luxurious hotel in the heart of Bogra. Ideal for relaxing stays and family vacations. Enjoy comfort, fine dining, and top-tier hospitality.
            </p>

            <div className="mt-4">
              <span className="text-gray-700 font-semibold text-lg">Distance: </span>
              <span className="text-gray-900 font-bold">196 km</span> from Dhaka
            </div>

            <div className="mt-3 text-sm text-gray-600">
              * Nearby Attractions: Mahasthangarh, Vasu Bihar, Momo Park
            </div>
          </div>

          <div className="bg-blue-50 p-4 md:p-5 border-t">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div>
                <div className="text-gray-800 font-semibold">Select number of nights:</div>
                <div className="flex items-center mt-2 space-x-3">
                  <button
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{nights}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-lg"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="mt-4 sm:mt-0 py-2 px-6 bg-purple-700 hover:bg-purple-600 text-white font-bold text-lg rounded-lg shadow-md"
                onClick={() => {
                  navigate("/payment", { state: { nights } });
                }}
              >
                Book for {nights} night{nights > 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
