import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    id: 1,
    name: "Paris City Tour",
    location: "Paris, France",
    rating: 5,
    price: 300,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    location: "Swiss Alps, Switzerland",
    rating: 4,
    price: 250,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Tokyo Culture Tour",
    location: "Tokyo, Japan",
    rating: 4.5,
    price: 350,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "New York City Tour",
    location: "New York, USA",
    rating: 4.5,
    price: 270,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Dubai Desert Safari",
    location: "Dubai, UAE",
    rating: 4.8,
    price: 400,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Santorini Island Escape",
    location: "Santorini, Greece",
    rating: 5,
    price: 450,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ToursPage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-20 px-5 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ffe259] to-[#f55555] text-transparent bg-clip-text py-3">
          Explore Amazing Tours
        </h2>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className="bg-[#f9fafb] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-110 transition-transform duration-500"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-72 object-cover rounded-t-3xl"
            />
            <CardBody className="p-6 space-y-5">
              <h3 className="text-2xl font-semibold text-[#1a202c]">{tour.name}</h3>
              <div className="flex items-center gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-[#fcbf49]" />
                <p>{tour.location}</p>
              </div>

              <div className="flex items-center gap-2 text-yellow-500">
                {[...Array(Math.floor(tour.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                {tour.rating % 1 !== 0 && (
                  <FaStar className="text-yellow-500 opacity-50" />
                )}
                <p className="ml-2 text-lg font-semibold">{tour.rating}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-[#1a202c]">${tour.price}/person</p>
                <Button
                  className="bg-[#f97171] text-white px-6 py-3 rounded-full hover:bg-[#fcbf49] transition"
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
