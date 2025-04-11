import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { FaStar, FaMapMarkerAlt, FaHotel } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Luxury Beach Resort",
    location: "Miami, USA",
    rating: 5,
    price: 250,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Mountain View Hotel",
    location: "Swiss Alps, Switzerland",
    rating: 4,
    price: 180,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "City Lights Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: 200,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "City Lights Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: 200,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "City Lights Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: 200,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "City Lights Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: 200,
    image:
      "https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Hotels() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-20 px-5 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ffe259] to-[#f55555] text-transparent bg-clip-text flex justify-center items-center gap-3">
          Hotels
        </h2>

        <p className="text-lg text-gray-600 mt-3">
          Find the best hotels and resorts around the world!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <CardBody className="p-6">
              <h3 className="text-2xl font-semibold text-[#071952]">
                {hotel.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <FaMapMarkerAlt className="text-[#088395]" />
                <p>{hotel.location}</p>
              </div>

              <div className="flex items-center gap-1 mt-3">
                {[...Array(Math.floor(hotel.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                {hotel.rating % 1 !== 0 && (
                  <FaStar className="text-yellow-500 opacity-50" />
                )}
                <p className="ml-2 text-lg font-semibold">{hotel.rating}</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <p className="text-xl font-bold text-[#088395]">
                  ${hotel.price}/night
                </p>
                <Button
                  className="bg-[#071952] text-white px-4 py-2 rounded-lg hover:bg-[#088395] transition"
                  onPress={() => navigate(`/hotels/details`)}
                >
                  Book Now
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
